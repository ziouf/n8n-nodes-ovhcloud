import type { IDisplayOptions, INodeProperties } from 'n8n-workflow';

/**
 * Configuration options for the "Return Full Objects / Max Items" toggle helper.
 */
export interface FullObjectsListOptions {
	/** Parameter name for the "Return Full Objects" toggle (default `'returnFullObjects'`). */
	fullObjectsParamName?: string;
	/** Parameter name for the "Max Items" number field (default `'maxItems'`). */
	maxItemsParamName?: string;
	/** Default value of the toggle (default `false`). */
	defaultFullObjects?: boolean;
	/** Default value for maxItems (default `1000`). */
	defaultMaxItems?: number;
}

/**
 * Returns an array of two n8n node properties:
 * 1. A boolean toggle to switch between returning a list of names vs. full objects.
 * 2. A "Max Items" number field that is only visible when the toggle is enabled.
 *
 * Both properties are wired to the provided `displayOptions` so they appear only
 * for the intended operation.  The Max Items field additionally shows only when
 * the toggle itself is `true`.
 *
 * @param displayOptions — The operation-level `IDisplayOptions` (must contain
 *   the `show` block for the current operation, e.g. `{ vpsOperation: ['list'] }`).
 * @param options — Optional overrides for parameter names and defaults.
 * @returns An array of exactly two `INodeProperties`.
 *
 * @example
 * ```typescript
 * // In a node's description() function:
 * export function description(displayOptions: IDisplayOptions): INodeProperties[] {
 *   return [
 *     ...operationProperties,
 *     ...fullObjectsListOptions({
 *       ...displayOptions,
 *       show: { vpsOperation: ['list'] },
 *     }),
 *   ];
 * }
 * ```
 */
export function fullObjectsListOptions(
	displayOptions: IDisplayOptions,
	options?: FullObjectsListOptions,
): INodeProperties[] {
	const fullObjectsParamName = options?.fullObjectsParamName ?? 'returnFullObjects';
	const maxItemsParamName = options?.maxItemsParamName ?? 'maxItems';
	const defaultFullObjects = options?.defaultFullObjects ?? false;
	const defaultMaxItems = options?.defaultMaxItems ?? 1000;

	return [
		{
			displayName: 'Return Full Objects',
			name: fullObjectsParamName,
			type: 'boolean',
			default: defaultFullObjects,
			description:
				'Whether to fetch and return the full objects (one API call per item) instead of a list of names',
			noDataExpression: true,
			displayOptions,
		},
		{
			displayName: 'Max Items',
			name: maxItemsParamName,
			type: 'number',
			typeOptions: { minValue: 1 },
			default: defaultMaxItems,
			description: 'Maximum number of items to fetch (set higher for endpoints with many items)',
			displayOptions: {
				...displayOptions,
				show: { ...(displayOptions.show ?? {}), [fullObjectsParamName]: [true] },
			},
		},
	];
}
