import {
	IExecuteFunctions,
	type INodeExecutionData,
	type INodeTypeDescription,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';

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
 * In concurrent mode (`concurrency > 1`), a bounded worker pool with up to
 * `concurrency` workers pulls indices from a shared counter.  Items run in
 * **real parallel**; results are stored at their original index and assembled
 * in order at the end.  When `continueOnFail` is **disabled**, the first fatal
 * error flags all workers — items already started will finish, but no new items
 * will be picked up.  All workers are awaited before the error is thrown so no
 * in-flight requests are left orphaned.
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
					returnData.push({
						json: {
							...(inputItem?.json ?? {}),
							error: error instanceof Error ? error.message : String(error),
						},
						pairedItem: { item: i },
						binary: inputItem?.binary,
					});
					continue;
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
						results[i] = [
							{
								json: {
									...(inputItem?.json ?? {}),
									error: error instanceof Error ? error.message : String(error),
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
 * Abstract base class for all OVH Cloud n8n nodes.
 *
 * Concrete classes must:
 * - Declare `description: INodeTypeDescription`
 * - Implement `execute(this: IExecuteFunctions)` by calling `executeTemplate.call(this, fn)`
 */
export abstract class BaseNode {
	abstract description: INodeTypeDescription;
}
