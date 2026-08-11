import type { IExecuteFunctions } from 'n8n-workflow';

/**
 * Resolves a node parameter for a specific input item.
 *
 * Acts as a thin wrapper around `getNodeParameter` that automatically
 * resolves the item index (defaulting to `0`) and supports an optional
 * fallback value or options object as the 4th argument.
 *
 * **Disambiguation rule for the 4th argument:**
 * - If it is a plain object → treated as **options** (3-arg form)
 * - Otherwise (string, number, undefined, …) → treated as a **fallback value** (4-arg form)
 *
 * @param ctx - The n8n execute context
 * @param key - Parameter name to resolve
 * @param idx - Optional item index (defaults to `0`)
 * @param fallbackOrOptions - Fallback value or options object (see disambiguation above)
 * @param options - Options object (only used when 4th arg is a fallback value)
 * @returns The resolved parameter value
 */
// Overload: getItemParameter(ctx, key, options)
export function getItemParameter(
	ctx: IExecuteFunctions,
	key: string,
	options?: Record<string, unknown>,
): unknown;
// Overload: getItemParameter(ctx, key, idx, fallback)
export function getItemParameter(
	ctx: IExecuteFunctions,
	key: string,
	idx: number,
	fallback?: unknown,
): unknown;
// Overload: getItemParameter(ctx, key, idx, fallback, options)
export function getItemParameter(
	ctx: IExecuteFunctions,
	key: string,
	idx: number,
	fallback: unknown,
	options: Record<string, unknown>,
): unknown;
// Overload: getItemParameter(ctx, key, idx, options) — options as 4th arg
export function getItemParameter(
	ctx: IExecuteFunctions,
	key: string,
	idx: number,
	options: Record<string, unknown>,
): unknown;
// Implementation signature (catch-all)
export function getItemParameter(
	ctx: IExecuteFunctions,
	key: string,
	idxOrOptions?: number | Record<string, unknown>,
	fallbackOrOptions?: unknown | Record<string, unknown>,
	options?: Record<string, unknown>,
): unknown {
	const idx = typeof idxOrOptions === 'number' ? idxOrOptions : 0;
	const fallback = typeof fallbackOrOptions === 'object' ? undefined : fallbackOrOptions;
	const isOptions =
		fallbackOrOptions !== undefined &&
		fallbackOrOptions !== null &&
		typeof fallbackOrOptions === 'object' &&
		!Array.isArray(fallbackOrOptions);

	if (isOptions) {
		return ctx.getNodeParameter(key, idx, fallbackOrOptions as Record<string, unknown>);
	}
	return ctx.getNodeParameter(key, idx, fallback, options);
}
