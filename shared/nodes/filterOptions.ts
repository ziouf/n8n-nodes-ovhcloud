import type { IDisplayOptions, INodeProperties, INodePropertyCollection } from 'n8n-workflow';

/**
 * Definition of a single optional filter for a list-type API operation.
 *
 * Each definition describes one field inside a fixed-collection group.
 * Fields whose `parameterPath` is set are considered "legacy mode" — they
 * are read from a flat parameter and must NOT be included in the generated
 * filters collection (they are handled separately by `buildFilterQuery`).
 */
export interface FilterDefinition {
	/** Name of the group (fixed-collection option key), e.g. `'dateRange'`, `'ids'`, `'status'`. */
	group: string;
	/** Display label for the group shown in the n8n UI. */
	groupDisplayName: string;
	/** Parameter name inside the group, e.g. `'from'`, `'orderId'`, `'value'`. */
	name: string;
	/** Human-readable label for the field. */
	displayName: string;
	/** Query parameter name sent to the OVHcloud API, e.g. `'date.from'`, `'status'`. */
	queryParam: string;
	/** Field type. `'options'` requires `options` to be set. */
	type: 'string' | 'number' | 'dateTime' | 'options';
	/** Optional description shown in the UI. */
	description?: string;
	/** Default value used when the field is empty. */
	default?: string | number | boolean;
	/** Available options for `type: 'options'`. */
	options?: Array<{ name: string; value: string | boolean }>;
	/** Optional placeholder text shown in the UI field. */
	placeholder?: string;
	/**
	 * When set, this filter is in "legacy / flat" mode: the value is read via
	 * `getNodeParameter(parameterPath, idx)` and the definition is ignored by
	 * `filtersCollection()` (it does not appear in the generated UI).
	 */
	parameterPath?: string;
}

/**
 * Optional configuration for the filters collection helper.
 */
export interface FiltersCollectionOptions {
	/** Name of the fixed-collection property (default `'filters'`). */
	collectionName?: string;
	/** Display label for the collection (default `'Filters'`). */
	collectionDisplayName?: string;
	/** Whether the user can add multiple groups of filters (default `true`). */
	multipleValues?: boolean;
}

/**
 * Builds an array of n8n node properties representing an optional filters
 * fixed-collection for list-type API operations.
 *
 * Definitions that have `parameterPath` set are excluded — they represent
 * legacy flat parameters already handled elsewhere.
 *
 * @param displayOptions — The operation-level `IDisplayOptions` (must contain
 *   the `show` block for the current operation).
 * @param definitions — Array of `FilterDefinition` objects.
 * @param options — Optional overrides for collection name, display name, and
 *   `multipleValues` behaviour.
 * @returns An array containing a single `fixedCollection` property (or `[]` if
 *   no applicable definitions remain after filtering).
 *
 * @example
 * ```typescript
 * // In a node's description() function:
 * export function description(displayOptions: IDisplayOptions): INodeProperties[] {
 *   return [
 *     ...operationProperties,
 *     ...filtersCollection({
 *       ...displayOptions,
 *       show: { vpsOperation: ['list'] },
 *     }, [
 *       {
 *         group: 'dateRange',
 *         groupDisplayName: 'Date Range',
 *         name: 'from',
 *         displayName: 'From',
 *         queryParam: 'date.from',
 *         type: 'dateTime',
 *       },
 *       {
 *         group: 'dateRange',
 *         groupDisplayName: 'Date Range',
 *         name: 'to',
 *         displayName: 'To',
 *         queryParam: 'date.to',
 *         type: 'dateTime',
 *       },
 *     ]),
 *   ];
 * }
 * ```
 */
export function filtersCollection(
	displayOptions: IDisplayOptions,
	definitions: FilterDefinition[],
	options?: FiltersCollectionOptions,
): INodeProperties[] {
	const collectionName = options?.collectionName ?? 'filters';
	const collectionDisplayName = options?.collectionDisplayName ?? 'Filters';
	const multipleValues = options?.multipleValues ?? true;

	// Exclude definitions in "flat" mode (parameterPath set).
	const applicable = definitions.filter((d) => d.parameterPath === undefined);

	if (applicable.length === 0) {
		return [];
	}

	// Group by `group` key, preserving insertion order.
	const groups = new Map<string, FilterDefinition[]>();
	for (const def of applicable) {
		const existing = groups.get(def.group);
		if (existing) {
			existing.push(def);
		} else {
			groups.set(def.group, [def]);
		}
	}

	// Build the `options` array for the fixedCollection: one entry per group.
	const collectionOptions: INodePropertyCollection[] = [];

	for (const [groupKey, defs] of groups) {
		const values: INodeProperties[] = [];

		for (const def of defs) {
			const base: INodeProperties = {
				displayName: def.displayName,
				name: def.name,
				type: def.type,
				default: def.default ?? (def.type === 'number' ? 0 : ''),
				description: def.description,
			};

			if (def.placeholder !== undefined) {
				base.placeholder = def.placeholder;
			}

			if (def.type === 'options' && def.options) {
				base.noDataExpression = true;
				base.options = def.options.map((o) => ({
					name: o.name,
					value: o.value,
				}));
			}

			values.push(base);
		}

		collectionOptions.push({
			name: groupKey,
			displayName: defs[0].groupDisplayName,
			values,
		});
	}

	return [
		{
			displayName: collectionDisplayName,
			name: collectionName,
			type: 'fixedCollection',
			typeOptions: {
				multipleValues,
			},
			default: {},
			placeholder: 'Add Filter',
			description:
				'Optional filters added to the API query string. Leave empty to list everything.',
			displayOptions,
			options: collectionOptions,
		},
	];
}
