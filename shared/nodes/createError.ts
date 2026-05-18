import { NodeApiError, type IExecuteFunctions, type JsonObject } from 'n8n-workflow';

/**
 * Creates a NodeApiError with resource and operation context.
 *
 * Adds structured error description including the resource and operation
 * that failed, making debugging much easier in n8n workflow logs.
 *
 * @param ctx - The n8n execute function context
 * @param error - The original error that was thrown
 * @param resource - The OVH resource name (e.g., 'vps', 'domain', 'ip')
 * @param operation - The operation that failed (e.g., 'get', 'list', 'create')
 * @param itemIndex - Optional item index for pairedItem tracking
 * @returns A NodeApiError with enriched context
 *
 * @example
 * ```typescript
 * try {
 *   const data = await client.httpGet(`/vps/${serviceName}`);
 * } catch (error) {
 *   throw createError(this, error, 'vps', 'get');
 * }
 * ```
 */
export function createError(
	ctx: IExecuteFunctions,
	error: unknown,
	resource: string,
	operation: string,
	itemIndex?: number,
): Error {
	const message = error instanceof Error ? error.message : String(error);
	const description = `${resource}/${operation}: ${message}`;

	const nodeApiError = new NodeApiError(ctx.getNode(), error as JsonObject, {
		...(itemIndex !== undefined ? { itemIndex } : {}),
		description,
	});

	Object.defineProperty(nodeApiError, 'message', {
		value: description,
		writable: true,
		configurable: true,
	});

	return nodeApiError;
}
