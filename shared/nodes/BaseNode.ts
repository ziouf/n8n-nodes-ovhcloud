import {
	IExecuteFunctions,
	type INodeExecutionData,
	type INodeTypeDescription,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';
import { createError } from './createError';
import type { OperationClass } from './operationClass';
import { DEFAULT_CLASS_CONCURRENCY } from './operationClass';

/**
 * Optional configuration for {@link executeTemplate}.
 */
export interface ExecuteTemplateOptions {
	/**
	 * Maximum number of input items to process concurrently.
	 *
	 * - `undefined` or `1` — strict sequential execution (previous behaviour).
	 * - `> 1` — a bounded worker pool with up to `concurrency` workers pulls
	 *   indices from a shared counter, so items run in **real parallel**.
	 *   Results are always returned in input-item order.
	 *
	 * When `continueOnFail` is **disabled**, the first fatal error sets a flag;
	 * workers that have already picked up an index will finish (or fail), but no
	 * new items will be started after the fatal error.  All workers are awaited
	 * before the error is thrown, so no in-flight requests are left orphaned.
	 */
	concurrency?: number;

	/**
	 * When set, error messages are automatically enriched with the resource
	 * identifier and the operation that failed (e.g. `"vps/get: …"`).
	 *
	 * The operation string is resolved from the node's operation parameter
	 * at the failing item's index.  If the caught error is already a
	 * `NodeApiError` it is passed through unchanged (no double-wrapping).
	 */
	errorContext?: ErrorContextOptions;

	/**
	 * Per-item concurrency classification.  When present, this **overrides**
	 * the legacy `concurrency` option and uses class-aware slot management:
	 * each item is classified (`read` | `write` | `destructive`) and workers
	 * wait for an available slot in that class before running.
	 *
	 * - `read` slots: up to `DEFAULT_CLASS_CONCURRENCY.read` (3) in flight.
	 * - `write` slots: up to `DEFAULT_CLASS_CONCURRENCY.write` (1) in flight.
	 * - `destructive` slots: up to `DEFAULT_CLASS_CONCURRENCY.destructive` (1) in flight.
	 *
	 * Workers are capped at `Math.min(items.length, 8)` to avoid excessive
	 * concurrency on large batches.  When both `perItemConcurrency` and
	 * `concurrency` are provided, `perItemConcurrency` takes precedence.
	 */
	perItemConcurrency?: {
		/** Classify an item's operation into an {@link OperationClass}. */
		classify: (ctx: IExecuteFunctions, itemIndex: number) => OperationClass;
	};
}

/**
 * Context for automatic resource/operation enrichment of errors.
 */
export interface ErrorContextOptions {
	/** Resource slug, e.g. `'vps'`, `'domain'`, `'ip'`. */
	resource: string;
	/** Name of the operation parameter on the node, e.g. `'vpsOperation'`. */
	operationParam: string;
	/**
	 * Optional override to compute the operation string from context.
	 * When provided, `getNodeParameter` is NOT called — this value is
	 * used verbatim as the operation label.
	 */
	resolveOperation?: (ctx: IExecuteFunctions, itemIndex: number) => string;
}

/**
 * Shared execute template for all OVH Cloud nodes.
 *
 * Wraps the node-specific operation function and iterates over all input items,
 * calling `fn` once per item.  Errors are handled according to the node's
 * `continueOnFail` setting:
 *
 * - **`continueOnFail` is true** — the input item is preserved (both `json` and
 *   `binary` spreads), a new key `error` is appended to `json`, and execution
 *   continues with the next item.  The `pairedItem` field points back to the
 *   original input index so downstream nodes can trace the failure.
 * - **`continueOnFail` is false** — a `NodeApiError` is thrown, aborting the
 *   node execution (n8n standard behaviour).
 *
 * **Per-item concurrency** (`perItemConcurrency` set): each item is classified
 * into a class (`read` | `write` | `destructive`) and workers wait for an
 * available slot in that class before running.  Read slots default to 3,
 * write/destructive to 1.  Workers are capped at `Math.min(items.length, 8)`.
 * This **overrides** the legacy `concurrency` option.
 *
 * In legacy concurrent mode (`concurrency > 1` without `perItemConcurrency`),
 * a bounded worker pool with up to `concurrency` workers pulls indices from a
 * shared counter.  Items run in **real parallel**; results are stored at their
 * original index and assembled in order at the end.  When `continueOnFail` is
 * **disabled**, the first fatal error flags all workers — items already started
 * will finish, but no new items will be picked up.  All workers are awaited
 * before the error is thrown so no in-flight requests are left orphaned.
 *
 * Must be called with `.call(this, fn)` where `this` is the n8n
 * `IExecuteFunctions` context.
 *
 * @param fn - The node-specific operations function to invoke for each input item.
 * @param options - Optional configuration (e.g. concurrency).
 */
export async function executeTemplate(
	this: IExecuteFunctions,
	fn: (this: IExecuteFunctions, itemIndex: number) => Promise<INodeExecutionData[]>,
	options?: ExecuteTemplateOptions,
): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];

	// ─── Per-item concurrency path (overrides legacy concurrency) ────────
	if (options?.perItemConcurrency) {
		return await executeWithPerItemConcurrency.call(this, fn, items, returnData, options);
	}

	const concurrency = options?.concurrency ?? 1;

	if (concurrency <= 1) {
		// Sequential execution — original behaviour.
		for (let i = 0; i < items.length; i++) {
			try {
				const result = await fn.call(this, i);
				returnData.push(...(Array.isArray(result) ? result : [result]));
			} catch (error) {
				if (this.continueOnFail()) {
					const inputItem = items[i];
					const message = error instanceof Error ? error.message : String(error);
					let enrichedError = message;
					if (options?.errorContext) {
						const operationString = options.errorContext.resolveOperation
							? options.errorContext.resolveOperation(this, i)
							: (() => {
									try {
										return this.getNodeParameter(options.errorContext.operationParam, i, {
											extractValue: true,
										}) as string;
									} catch {
										return 'unknown';
									}
								})();
						enrichedError = `${options.errorContext.resource}/${operationString}: ${message}`;
					}
					returnData.push({
						json: {
							...(inputItem?.json ?? {}),
							error: enrichedError,
						},
						pairedItem: { item: i },
						binary: inputItem?.binary,
					});
					continue;
				}
				if (options?.errorContext) {
					if (error instanceof NodeApiError) {
						throw error; // Already wrapped — pass through unchanged.
					}
					const operationString = options.errorContext.resolveOperation
						? options.errorContext.resolveOperation(this, i)
						: (() => {
								try {
									return this.getNodeParameter(options.errorContext.operationParam, i, {
										extractValue: true,
									}) as string;
								} catch {
									return 'unknown';
								}
							})();
					throw createError(this, error, options.errorContext.resource, operationString, i);
				}
				throw new NodeApiError(this.getNode(), error as unknown as JsonObject, { itemIndex: i });
			}
		}
	} else {
		// Bounded worker pool — real parallel execution.
		const numWorkers = Math.min(concurrency, items.length);
		let nextIndex = 0;
		// Pre-allocated array so each worker writes at its assigned index.
		const results: INodeExecutionData[][] = new Array(items.length);
		// Shared flag: the first fatal error wins.
		let fatalError: { error: unknown; index: number } | undefined;

		const worker = async (): Promise<void> => {
			while (true) {
				// Stop picking up new work if a fatal error has already occurred.
				if (fatalError !== undefined) return;

				const i = nextIndex++;
				if (i >= items.length) return;

				try {
					const result = await fn.call(this, i);
					results[i] = Array.isArray(result) ? result : [result];
				} catch (error) {
					if (this.continueOnFail()) {
						const inputItem = items[i];
						const message = error instanceof Error ? error.message : String(error);
						let enrichedError = message;
						if (options?.errorContext) {
							const operationString = options.errorContext.resolveOperation
								? options.errorContext.resolveOperation(this, i)
								: (() => {
										try {
											return this.getNodeParameter(options.errorContext.operationParam, i, {
												extractValue: true,
											}) as string;
										} catch {
											return 'unknown';
										}
									})();
							enrichedError = `${options.errorContext.resource}/${operationString}: ${message}`;
						}
						results[i] = [
							{
								json: {
									...(inputItem?.json ?? {}),
									error: enrichedError,
								},
								pairedItem: { item: i },
								binary: inputItem?.binary,
							},
						];
					} else {
						// First worker to encounter a fatal error sets the flag.
						if (fatalError === undefined) {
							fatalError = { error, index: i };
						}
						return;
					}
				}
			}
		};

		await Promise.all(Array.from({ length: numWorkers }, () => worker()));

		// If a fatal error occurred, throw after all workers have settled.
		if (fatalError !== undefined) {
			if (options?.errorContext) {
				if (fatalError.error instanceof NodeApiError) {
					throw fatalError.error; // Already wrapped — pass through unchanged.
				}
				const operationString = options.errorContext.resolveOperation
					? options.errorContext.resolveOperation(this, fatalError.index)
					: (() => {
							try {
								return this.getNodeParameter(
									options.errorContext.operationParam,
									fatalError.index,
									{ extractValue: true },
								) as string;
							} catch {
								return 'unknown';
							}
						})();
				throw createError(
					this,
					fatalError.error,
					options.errorContext.resource,
					operationString,
					fatalError.index,
				);
			}
			throw new NodeApiError(this.getNode(), fatalError.error as unknown as JsonObject, {
				itemIndex: fatalError.index,
			});
		}

		// Assemble results in input-item order.
		for (const r of results) {
			returnData.push(...r);
		}
	}

	return [returnData];
}

/**
 * Execute items with per-class concurrency slot management.
 *
 * Each item is classified into `read` | `write` | `destructive`.  Workers
 * acquire a slot in the appropriate class before running; if the class is
 * at capacity they wait on a release signal and retry.
 */
async function executeWithPerItemConcurrency(
	this: IExecuteFunctions,
	fn: (this: IExecuteFunctions, itemIndex: number) => Promise<INodeExecutionData[]>,
	items: INodeExecutionData[],
	returnData: INodeExecutionData[],
	options: ExecuteTemplateOptions,
): Promise<INodeExecutionData[][]> {
	const { perItemConcurrency } = options;
	if (!perItemConcurrency) return [returnData]; // Should not happen — already guarded.

	/** Number of free slots per class. */
	const slotsAvailable: Record<OperationClass, number> = {
		read: DEFAULT_CLASS_CONCURRENCY.read,
		write: DEFAULT_CLASS_CONCURRENCY.write,
		destructive: DEFAULT_CLASS_CONCURRENCY.destructive,
	};

	/** Queues of resolve callbacks — one per slot release. */
	const waitQueues: Record<OperationClass, Array<() => void>> = {
		read: [],
		write: [],
		destructive: [],
	};

	/** Wait until a slot is available for the given class. */
	const acquireSlot = async (cls: OperationClass): Promise<void> => {
		while (slotsAvailable[cls] <= 0) {
			// Enqueue a resolver; the next release() will call it.
			await new Promise<void>((resolve) => {
				waitQueues[cls].push(resolve);
			});
		}
		slotsAvailable[cls]--;
	};

	/** Release a slot and wake one waiting worker. */
	const releaseSlot = (cls: OperationClass): void => {
		slotsAvailable[cls]++;
		const resolve = waitQueues[cls].shift();
		resolve?.();
	};

	const numWorkers = Math.max(1, Math.min(items.length, 8));
	let nextIndex = 0;
	const results: INodeExecutionData[][] = new Array(items.length);
	let fatalError: { error: unknown; index: number } | undefined;

	const worker = async (): Promise<void> => {
		while (true) {
			if (fatalError !== undefined) return;

			const i = nextIndex++;
			if (i >= items.length) return;

			let cls: OperationClass;
			try {
				cls = perItemConcurrency.classify(this, i);
			} catch {
				cls = 'write'; // Fall back to write on classification errors.
			}

			await acquireSlot(cls);

			try {
				const result = await fn.call(this, i);
				results[i] = Array.isArray(result) ? result : [result];
			} catch (error) {
				if (this.continueOnFail()) {
					const inputItem = items[i];
					const message = error instanceof Error ? error.message : String(error);
					let enrichedError = message;
					if (options?.errorContext) {
						const operationString = options.errorContext.resolveOperation
							? options.errorContext.resolveOperation(this, i)
							: (() => {
									try {
										return this.getNodeParameter(options.errorContext.operationParam, i, {
											extractValue: true,
										}) as string;
									} catch {
										return 'unknown';
									}
								})();
						enrichedError = `${options.errorContext.resource}/${operationString}: ${message}`;
					}
					results[i] = [
						{
							json: {
								...(inputItem?.json ?? {}),
								error: enrichedError,
							},
							pairedItem: { item: i },
							binary: inputItem?.binary,
						},
					];
				} else {
					if (fatalError === undefined) {
						fatalError = { error, index: i };
					}
					return;
				}
			} finally {
				releaseSlot(cls);
			}
		}
	};

	await Promise.all(Array.from({ length: numWorkers }, () => worker()));

	if (fatalError !== undefined) {
		if (options?.errorContext) {
			if (fatalError.error instanceof NodeApiError) {
				throw fatalError.error;
			}
			const operationString = options.errorContext.resolveOperation
				? options.errorContext.resolveOperation(this, fatalError.index)
				: (() => {
						try {
							return this.getNodeParameter(options.errorContext.operationParam, fatalError.index, {
								extractValue: true,
							}) as string;
						} catch {
							return 'unknown';
						}
					})();
			throw createError(
				this,
				fatalError.error,
				options.errorContext.resource,
				operationString,
				fatalError.index,
			);
		}
		throw new NodeApiError(this.getNode(), fatalError.error as unknown as JsonObject, {
			itemIndex: fatalError.index,
		});
	}

	for (const r of results) {
		returnData.push(...r);
	}

	return [returnData];
}

/**
 * Abstract base class for all OVH Cloud n8n nodes.
 *
 * Concrete classes must:
 * - Declare `description: INodeTypeDescription`
 * - Implement `execute(this: IExecuteFunctions)` by calling `executeTemplate.call(this, fn)`
 */
export abstract class BaseNode {
	abstract description: INodeTypeDescription;
}
