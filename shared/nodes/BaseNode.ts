import {
	IExecuteFunctions,
	type INodeExecutionData,
	type INodeTypeDescription,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';
import { createError } from './createError';

/**
 * Optional configuration for {@link executeTemplate}.
 */
export interface ExecuteTemplateOptions {
	/**
	 * When set, error messages are automatically enriched with the resource
	 * identifier and the operation that failed (e.g. `"vps/get: …"`).
	 *
	 * The operation string is resolved from the node's operation parameter
	 * at the failing item's index.  If the caught error is already a
	 * `NodeApiError` it is passed through unchanged (no double-wrapping).
	 */
	errorContext?: ErrorContextOptions;
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
 * Resolves the operation label for error enrichment, using the optional
 * `resolveOperation` override or reading the node's operation parameter.
 * Falls back to `'unknown'` when the parameter cannot be read.
 */
function resolveOperationString(
	ctx: IExecuteFunctions,
	options: ErrorContextOptions,
	itemIndex: number,
): string {
	if (options.resolveOperation) {
		return options.resolveOperation(ctx, itemIndex);
	}
	try {
		return ctx.getNodeParameter(options.operationParam, itemIndex, { extractValue: true }) as string;
	} catch {
		return 'unknown';
	}
}

/**
 * Shared execute template for all OVH Cloud nodes.
 *
 * Wraps the node-specific operation function and iterates over all input items,
 * calling `fn` once per item sequentially.  Errors are handled according to the node's
 * `continueOnFail` setting:
 *
 * - **`continueOnFail` is true** — the input item is preserved (both `json` and
 *   `binary` spreads), a new key `error` is appended to `json`, and execution
 *   continues with the next item.  The `pairedItem` field points back to the
 *   original input index so downstream nodes can trace the failure.
 * - **`continueOnFail` is false** — a `NodeApiError` is thrown, aborting the
 *   node execution (n8n standard behaviour).
 *
 * Must be called with `.call(this, fn)` where `this` is the n8n
 * `IExecuteFunctions` context.
 *
 * @param fn - The node-specific operations function to invoke for each input item.
 * @param options - Optional configuration (e.g. errorContext).
 */
export async function executeTemplate(
	this: IExecuteFunctions,
	fn: (this: IExecuteFunctions, itemIndex: number) => Promise<INodeExecutionData[]>,
	options?: ExecuteTemplateOptions,
): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];

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
					const operationString = resolveOperationString(this, options.errorContext, i);
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
				const operationString = resolveOperationString(this, options.errorContext, i);
				throw createError(this, error, options.errorContext.resource, operationString, i);
			}
			throw new NodeApiError(this.getNode(), error as unknown as JsonObject, { itemIndex: i });
		}
	}

	return [returnData];
}

/**
 * Abstract base class for all OVH Cloud n8n nodes.
 *
 * Concrete classes must:
 * - Declare `description: INodeTypeDescription`
 * - Implement `execute(this: IExecuteFunctions)` by calling
 *   `super.executeTemplate.call(this, execute, { errorContext: { resource, operationParam } })`.
 */

export abstract class BaseNode {
	abstract description: INodeTypeDescription;
}
