import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import type { FilterDefinition } from './filterOptions';

/**
 * Checks whether a raw filter value should be skipped (empty / default).
 *
 * - `undefined` / `null` → skip
 * - Empty string (after trim) → skip
 * - `NaN` number → skip
 * - Number equal to its definition's default → skip
 * - Everything else → keep
 */
export function isEmptyFilterValue(
	value: unknown,
	defaultValue?: string | number | boolean,
): boolean {
	if (value === undefined || value === null) {
		return true;
	}

	if (typeof value === 'string') {
		return value.trim() === '';
	}

	if (typeof value === 'number') {
		if (Number.isNaN(value)) {
			return true;
		}
		// Skip if the value equals the default (0 is the implicit default for numbers).
		const def = defaultValue ?? 0;
		if (typeof def === 'number' && value === def) {
			return true;
		}
	}

	if (typeof value === 'boolean') {
		// Booleans are always meaningful — never skip.
		return false;
	}

	return false;
}

/**
 * Builds a query-string object from filter definitions and the execution context.
 *
 * For each definition:
 * - If `parameterPath` is set → reads the value from that flat parameter.
 * - Otherwise → reads from the nested filters collection object.
 *
 * Empty / default values are skipped. The resulting object maps OVHcloud query
 * parameter names to their normalised values.
 *
 * @param ctx — The n8n execute context.
 * @param itemIndex — Index of the current input item.
 * @param definitions — Array of `FilterDefinition` objects (same set used for
 *   `filtersCollection`).
 * @param collectionName — Name of the filters fixed-collection (default `'filters'`).
 * @returns An `IDataObject` with query params, or `undefined` if no filters were
 *   applicable.
 */
export function buildFilterQuery(
	ctx: IExecuteFunctions,
	itemIndex: number,
	definitions: FilterDefinition[],
	collectionName = 'filters',
): IDataObject | undefined {
	const qs: IDataObject = {};

	// Read the filters collection once.
	const filters = ctx.getNodeParameter(collectionName, itemIndex, {}) as IDataObject | undefined;

	for (const def of definitions) {
		// Read raw value depending on mode.
		let rawValue: unknown;
		if (def.parameterPath !== undefined) {
			rawValue = ctx.getNodeParameter(def.parameterPath, itemIndex);
		} else {
			const groupObj = ((filters ?? {})[def.group] as IDataObject | undefined) ?? {};
			rawValue = groupObj[def.name];
		}

		// Skip empty / default values.
		if (isEmptyFilterValue(rawValue, def.default)) {
			continue;
		}

		// Normalise the value based on type.
		let normalized: string | number | boolean;

		switch (def.type) {
			case 'number':
				normalized = Number(rawValue);
				break;
			case 'string':
			case 'dateTime':
				normalized = String(rawValue);
				break;
			case 'options':
				// Options keep their original type (string | boolean).
				normalized = rawValue as string | boolean;
				break;
			default:
				normalized = String(rawValue);
		}

		qs[def.queryParam] = normalized;
	}

	return Object.keys(qs).length > 0 ? qs : undefined;
}
