import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import type { FilterDefinition } from './filterOptions';

/**
 * Checks whether a raw filter value should be skipped (empty / default).
 *
 * - `undefined` / `null` → skip
 * - Empty string (after trim) → skip
 * - Empty array → skip
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

	if (Array.isArray(value)) {
		return value.length === 0;
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

	// Objects (e.g. parsed JSON) are always meaningful — never skip; the final return false covers this case too.
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
			const groupValue = (filters ?? {})[def.group];
			// fixedCollection with multipleValues:true stores each group as an array of
			// entry objects (e.g. { dateRange: [{ from, to }] }); with multipleValues:false
			// it stores a single object ({ dateRange: { from, to } }). Handle both shapes.
			let groupObj: IDataObject = {};
			if (Array.isArray(groupValue)) {
				for (const entry of groupValue) {
					if (typeof entry === 'object' && entry !== null) {
						Object.assign(groupObj, entry as IDataObject);
					}
				}
			} else if (typeof groupValue === 'object' && groupValue !== null) {
				groupObj = groupValue as IDataObject;
			}
			rawValue = groupObj[def.name];
		}

		// Skip empty / default values.
		if (isEmptyFilterValue(rawValue, def.default)) {
			continue;
		}

		// Normalise the value based on type.
		let normalized: string | number | boolean | string[] | object;

		switch (def.type) {
			case 'number':
				normalized = Number(rawValue);
				break;
			case 'string':
			case 'dateTime':
				if (def.delimiter !== undefined) {
					// Split on delimiter, filter empty tokens, send as array.
					const tokens = String(rawValue)
						.split(def.delimiter)
						.map((t) => t.trim())
						.filter((t) => t !== '');
					normalized = tokens;
				} else {
					normalized = String(rawValue);
				}
				break;
			case 'options':
				// Options keep their original type (string | boolean).
				normalized = rawValue as string | boolean;
				break;
			case 'multiOptions':
				// Filter out non-string / empty values, send remaining as array.
				normalized = (Array.isArray(rawValue) ? rawValue : [])
					.filter((v) => typeof v === 'string' && v.trim() !== '')
					.map((v) => String(v));
				break;
			case 'json':
				if (typeof rawValue === 'object' && rawValue !== null) {
					// Passthrough: already an object.
					normalized = rawValue as object;
				} else if (typeof rawValue === 'string') {
					try {
						normalized = JSON.parse(rawValue) as object;
					} catch {
						throw new Error(
							`Invalid JSON in filter "${def.displayName}" (queryParam: "${def.queryParam}"). Expected a valid JSON object.`,
						);
					}
				} else {
					normalized = String(rawValue);
				}
				break;
			default:
				normalized = String(rawValue);
		}

		// Re-check emptiness after normalization (e.g. empty array from delimiter split).
		if (isEmptyFilterValue(normalized)) {
			continue;
		}

		qs[def.queryParam] = normalized;
	}

	return Object.keys(qs).length > 0 ? qs : undefined;
}
