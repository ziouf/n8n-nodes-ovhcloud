import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Reads a node parameter with proper multi-item support.
 *
 * Operations invoked by `executeTemplate` receive an `itemIndex` argument.
 * This helper falls back to index 0 when no item index is provided (legacy
 * calls, tests, or list-only operations), keeping the correct multi-item
 * behaviour when one is passed.
 *
 * @param ctx     — the n8n execute context (`this` in an operation)
 * @param name    — parameter name as declared in the node definition
 * @param idx     — item index (optional; defaults to 0 for backward compat)
 * @param options — optional extra options passed to `getNodeParameter`
 * @returns       — the resolved parameter value
 */
export function getItemParameter<T = unknown>(
	ctx: IExecuteFunctions,
	name: string,
	idx?: number,
	options?: Record<string, unknown>,
): T {
	// getNodeParameter overloads:
	//   (name: string, itemIndex: number, options?: IDataObject): T
	//   (name: string, itemIndex: number, fallback: T, options?: IDataObject): T
	// We always pass a number; `idx ?? 0` keeps backward compat with tests.
	return ctx.getNodeParameter(name, idx ?? 0, options) as T;
}
