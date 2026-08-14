/* eslint-disable @typescript-eslint/no-explicit-any */
import type { INodeProperties } from 'n8n-workflow';
import { filtersCollection, type FilterDefinition } from './filterOptions';
import { buildFilterQuery, isEmptyFilterValue } from './filterQuery';

// ─── Helpers ────────────────────────────────────────────────────────────────

function makeCtx(getNodeParameterMock: jest.MockedFunction<any>): any {
	return { getNodeParameter: getNodeParameterMock };
}

const DISPLAY_OPTIONS: any = { show: { vpsOperation: ['list'] } };

// ─── isEmptyFilterValue ─────────────────────────────────────────────────────

describe('isEmptyFilterValue', () => {
	it('returns true for undefined', () => {
		expect(isEmptyFilterValue(undefined)).toBe(true);
	});

	it('returns true for null', () => {
		expect(isEmptyFilterValue(null)).toBe(true);
	});

	it('returns true for empty string', () => {
		expect(isEmptyFilterValue('')).toBe(true);
	});

	it('returns true for whitespace-only string', () => {
		expect(isEmptyFilterValue('   ')).toBe(true);
	});

	it('returns false for non-empty string', () => {
		expect(isEmptyFilterValue('hello')).toBe(false);
	});

	it('returns true for NaN', () => {
		expect(isEmptyFilterValue(NaN)).toBe(true);
	});

	it('returns false for valid number', () => {
		expect(isEmptyFilterValue(42)).toBe(false);
	});

	it('skips number when equal to default 0', () => {
		expect(isEmptyFilterValue(0, 0)).toBe(true);
	});

	it('keeps number when different from default', () => {
		expect(isEmptyFilterValue(5, 0)).toBe(false);
	});

	it('returns false for boolean true', () => {
		expect(isEmptyFilterValue(true)).toBe(false);
	});

	it('returns false for boolean false', () => {
		expect(isEmptyFilterValue(false)).toBe(false);
	});

	it('returns true for empty array', () => {
		expect(isEmptyFilterValue([])).toBe(true);
	});

	it('returns false for non-empty array', () => {
		expect(isEmptyFilterValue(['a', 'b'])).toBe(false);
	});

	it('returns false for object (parsed JSON)', () => {
		expect(isEmptyFilterValue({ key: 'value' })).toBe(false);
	});
});

// ─── filtersCollection ──────────────────────────────────────────────────────

describe('filtersCollection', () => {
	const defs: FilterDefinition[] = [
		{
			group: 'dateRange',
			groupDisplayName: 'Date Range',
			name: 'from',
			displayName: 'From',
			queryParam: 'date.from',
			type: 'dateTime',
		},
		{
			group: 'dateRange',
			groupDisplayName: 'Date Range',
			name: 'to',
			displayName: 'To',
			queryParam: 'date.to',
			type: 'dateTime',
		},
	];

	it('returns [] when no definitions provided', () => {
		const result = filtersCollection(DISPLAY_OPTIONS, []);
		expect(result).toEqual([]);
	});

	it('returns [] when all definitions use parameterPath', () => {
		const flatDefs: FilterDefinition[] = [
			{
				group: 'ids',
				groupDisplayName: 'IDs',
				name: 'ids',
				displayName: 'IDs',
				queryParam: 'id',
				type: 'string',
				parameterPath: 'ids',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, flatDefs);
		expect(result).toEqual([]);
	});

	it('returns a single fixedCollection for one definition', () => {
		const singleDef: FilterDefinition[] = [
			{
				group: 'status',
				groupDisplayName: 'Status',
				name: 'value',
				displayName: 'Status',
				queryParam: 'status',
				type: 'string',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, singleDef);
		expect(result).toHaveLength(1);

		const collection = result[0]!;
		expect(collection.name).toBe('filters');
		expect(collection.type).toBe('fixedCollection');
		expect(collection.default).toEqual({});
		expect(collection.displayOptions).toEqual(DISPLAY_OPTIONS);
		expect(collection.typeOptions?.multipleValues).toBe(true);
		expect(collection.placeholder).toBe('Add Filter');
		expect(collection.description).toBe(
			'Optional filters added to the API query string. Leave empty to list everything.',
		);

		// Check the group option.
		const statusOption = collection.options?.[0] as any;
		expect(statusOption.name).toBe('status');
		expect(statusOption.displayName).toBe('Status');
		expect(statusOption.values).toHaveLength(1);
		expect(statusOption.values[0]!.name).toBe('value');
		expect(statusOption.values[0]!.displayName).toBe('Status');
	});

	it('groups definitions by group in insertion order', () => {
		const multiGroup: FilterDefinition[] = [
			{
				group: 'dateRange',
				groupDisplayName: 'Date Range',
				name: 'from',
				displayName: 'From',
				queryParam: 'date.from',
				type: 'dateTime',
			},
			{
				group: 'ids',
				groupDisplayName: 'IDs',
				name: 'orderId',
				displayName: 'Order ID',
				queryParam: 'orderId',
				type: 'string',
			},
			{
				group: 'dateRange',
				groupDisplayName: 'Date Range',
				name: 'to',
				displayName: 'To',
				queryParam: 'date.to',
				type: 'dateTime',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, multiGroup);
		expect(result).toHaveLength(1);

		const collection = result[0]!;
		// Should have 2 group options (dateRange first, ids second — insertion order).
		expect(collection.options).toHaveLength(2);

		const dateRangeOption = collection.options?.[0] as any;
		expect(dateRangeOption.name).toBe('dateRange');
		expect(dateRangeOption.values).toHaveLength(2);
		expect(dateRangeOption.values[0]!.name).toBe('from');
		expect(dateRangeOption.values[1]!.name).toBe('to');

		const idsOption = collection.options?.[1] as any;
		expect(idsOption.name).toBe('ids');
		expect(idsOption.values).toHaveLength(1);
		expect(idsOption.values[0]!.name).toBe('orderId');
	});

	it('applies defaults: string → "", number → 0', () => {
		const defsWithDefaults: FilterDefinition[] = [
			{
				group: 'g1',
				groupDisplayName: 'Group 1',
				name: 'str',
				displayName: 'String Field',
				queryParam: 'str',
				type: 'string',
			},
			{
				group: 'g1',
				groupDisplayName: 'Group 1',
				name: 'num',
				displayName: 'Number Field',
				queryParam: 'num',
				type: 'number',
			},
			{
				group: 'g1',
				groupDisplayName: 'Group 1',
				name: 'strWithDefault',
				displayName: 'String With Default',
				queryParam: 'strDefault',
				type: 'string',
				default: 'hello',
			},
			{
				group: 'g1',
				groupDisplayName: 'Group 1',
				name: 'numWithDefault',
				displayName: 'Number With Default',
				queryParam: 'numDefault',
				type: 'number',
				default: 42,
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, defsWithDefaults);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];

		const strField = values.find((v: any) => v.name === 'str')!;
		expect(strField.default).toBe('');

		const numField = values.find((v: any) => v.name === 'num')!;
		expect(numField.default).toBe(0);

		const strWithDefault = values.find((v: any) => v.name === 'strWithDefault')!;
		expect(strWithDefault.default).toBe('hello');

		const numWithDefault = values.find((v: any) => v.name === 'numWithDefault')!;
		expect(numWithDefault.default).toBe(42);
	});

	it('adds noDataExpression and options for type "options" (string values)', () => {
		const optsDef: FilterDefinition[] = [
			{
				group: 'kind',
				groupDisplayName: 'Kind',
				name: 'value',
				displayName: 'Kind',
				queryParam: 'kind',
				type: 'options',
				options: [
					{ name: 'Small', value: 'small' },
					{ name: 'Large', value: 'large' },
				],
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, optsDef);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];
		const optField = values[0]!;

		expect(optField.noDataExpression).toBe(true);
		expect(optField.options).toEqual([
			{ name: 'Small', value: 'small' },
			{ name: 'Large', value: 'large' },
		]);
	});

	it('handles boolean option values', () => {
		const boolOptsDef: FilterDefinition[] = [
			{
				group: 'flags',
				groupDisplayName: 'Flags',
				name: 'enabled',
				displayName: 'Enabled',
				queryParam: 'enabled',
				type: 'options',
				options: [
					{ name: 'Yes', value: true },
					{ name: 'No', value: false },
				],
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, boolOptsDef);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];
		const optField = values[0]!;

		expect(optField.noDataExpression).toBe(true);
		expect(optField.options).toEqual([
			{ name: 'Yes', value: true },
			{ name: 'No', value: false },
		]);
	});

	it('adds noDataExpression and options for type "multiOptions"', () => {
		const multiOptsDef: FilterDefinition[] = [
			{
				group: 'actions',
				groupDisplayName: 'Actions',
				name: 'value',
				displayName: 'Actions',
				queryParam: 'action',
				type: 'multiOptions',
				options: [
					{ name: 'Read', value: 'account:apiovh:me/get' },
					{ name: 'Write', value: 'account:apiovh:me/post' },
				],
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, multiOptsDef);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];
		const optField = values[0]!;

		expect(optField.noDataExpression).toBe(true);
		expect(optField.options).toEqual([
			{ name: 'Read', value: 'account:apiovh:me/get' },
			{ name: 'Write', value: 'account:apiovh:me/post' },
		]);
	});

	it('generates no options for json type (noDataExpression not set)', () => {
		const jsonDef: FilterDefinition[] = [
			{
				group: 'tags',
				groupDisplayName: 'IAM Tags',
				name: 'value',
				displayName: 'IAM Tags',
				queryParam: 'iamTags',
				type: 'json',
				description: 'JSON object for IAM tag filtering',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, jsonDef);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];
		const jsonField = values[0]!;

		expect(jsonField.type).toBe('json');
		expect(jsonField.description).toBe('JSON object for IAM tag filtering');
		expect(jsonField.options).toBeUndefined();
	});

	it('respects custom collection options', () => {
		const result = filtersCollection(DISPLAY_OPTIONS, defs, {
			collectionName: 'myFilters',
			collectionDisplayName: 'My Filters',
			multipleValues: false,
		});
		const collection = result[0]!;
		expect(collection.name).toBe('myFilters');
		expect(collection.displayName).toBe('My Filters');
		expect(collection.typeOptions?.multipleValues).toBe(false);
	});

	it('includes placeholder when defined', () => {
		const withPlaceholder: FilterDefinition[] = [
			{
				group: 'g1',
				groupDisplayName: 'Group 1',
				name: 'search',
				displayName: 'Search',
				queryParam: 'search',
				type: 'string',
				placeholder: 'Enter search term…',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, withPlaceholder);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];
		expect(values[0]!.placeholder).toBe('Enter search term…');
	});

	it('propagates description from definition', () => {
		const withDesc: FilterDefinition[] = [
			{
				group: 'g1',
				groupDisplayName: 'Group 1',
				name: 'tag',
				displayName: 'Tag',
				queryParam: 'tag',
				type: 'string',
				description: 'Filter by tag name',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, withDesc);
		const collection = result[0]!;
		const values = (collection.options?.[0] as any)?.values as INodeProperties[];
		expect(values[0]!.description).toBe('Filter by tag name');
	});

	it('excludes parameterPath definitions from the generated collection', () => {
		const mixedDefs: FilterDefinition[] = [
			{
				group: 'flat',
				groupDisplayName: 'Flat',
				name: 'ids',
				displayName: 'IDs',
				queryParam: 'id',
				type: 'string',
				parameterPath: 'ids',
			},
			{
				group: 'nested',
				groupDisplayName: 'Nested',
				name: 'status',
				displayName: 'Status',
				queryParam: 'status',
				type: 'string',
			},
		];
		const result = filtersCollection(DISPLAY_OPTIONS, mixedDefs);
		expect(result).toHaveLength(1);
		const collection = result[0]!;
		// Only the 'nested' group should appear.
		expect(collection.options).toHaveLength(1);
		const nestedOption = collection.options?.[0] as any;
		expect(nestedOption.name).toBe('nested');
	});
});

// ─── buildFilterQuery ───────────────────────────────────────────────────────

describe('buildFilterQuery', () => {
	const defs: FilterDefinition[] = [
		{
			group: 'dateRange',
			groupDisplayName: 'Date Range',
			name: 'from',
			displayName: 'From',
			queryParam: 'date.from',
			type: 'dateTime',
		},
		{
			group: 'dateRange',
			groupDisplayName: 'Date Range',
			name: 'to',
			displayName: 'To',
			queryParam: 'date.to',
			type: 'dateTime',
		},
		{
			group: 'status',
			groupDisplayName: 'Status',
			name: 'value',
			displayName: 'Status',
			queryParam: 'status',
			type: 'string',
		},
	];

	it('returns undefined when getNodeParameter returns {}', () => {
		const mockFn = jest.fn().mockReturnValue({});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, defs);
		expect(result).toBeUndefined();
		// Should have called getNodeParameter for the collection.
		expect(mockFn).toHaveBeenCalledWith('filters', 0, {});
	});

	it('maps keys with dot notation (date.from / date.to)', () => {
		const mockFn = jest.fn().mockReturnValue({
			dateRange: { from: '2024-01-01', to: '2024-12-31' },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, defs);
		expect(result).toEqual({
			'date.from': '2024-01-01',
			'date.to': '2024-12-31',
		});
	});

	it('skips empty string values', () => {
		const mockFn = jest.fn().mockReturnValue({
			dateRange: { from: '2024-01-01', to: '' },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, defs);
		expect(result).toEqual({
			'date.from': '2024-01-01',
		});
	});

	it('skips number equal to default (0)', () => {
		const numDef: FilterDefinition[] = [
			{
				group: 'limits',
				groupDisplayName: 'Limits',
				name: 'maxItems',
				displayName: 'Max Items',
				queryParam: 'limit',
				type: 'number',
			},
		];
		const mockFn = jest.fn().mockReturnValue({ limits: { maxItems: 0 } });
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, numDef);
		expect(result).toBeUndefined();
	});

	it('coerces string "5" to number 5 for type number', () => {
		const numDef: FilterDefinition[] = [
			{
				group: 'limits',
				groupDisplayName: 'Limits',
				name: 'maxItems',
				displayName: 'Max Items',
				queryParam: 'limit',
				type: 'number',
			},
		];
		const mockFn = jest.fn().mockReturnValue({ limits: { maxItems: '5' } });
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, numDef);
		expect(result).toEqual({ limit: 5 });
	});

	it('transmits boolean true/false for options type', () => {
		const boolDef: FilterDefinition[] = [
			{
				group: 'flags',
				groupDisplayName: 'Flags',
				name: 'enabled',
				displayName: 'Enabled',
				queryParam: 'enabled',
				type: 'options',
			},
		];
		const mockFnTrue = jest.fn().mockReturnValue({ flags: { enabled: true } });
		const ctxTrue = makeCtx(mockFnTrue);
		let result = buildFilterQuery(ctxTrue, 0, boolDef);
		expect(result).toEqual({ enabled: true });

		const mockFnFalse = jest.fn().mockReturnValue({ flags: { enabled: false } });
		const ctxFalse = makeCtx(mockFnFalse);
		result = buildFilterQuery(ctxFalse, 0, boolDef);
		expect(result).toEqual({ enabled: false });
	});

	it('handles multiple fields within the same group', () => {
		const mockFn = jest.fn().mockReturnValue({
			dateRange: { from: '2024-01-01', to: '2024-12-31' },
			status: { value: 'active' },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, defs);
		expect(result).toEqual({
			'date.from': '2024-01-01',
			'date.to': '2024-12-31',
			status: 'active',
		});
	});

	it('reads from parameterPath when set (flat mode)', () => {
		const flatDefs: FilterDefinition[] = [
			{
				group: 'ids',
				groupDisplayName: 'IDs',
				name: 'ids',
				displayName: 'IDs',
				queryParam: 'id',
				type: 'string',
				parameterPath: 'serviceIds',
			},
		];
		const mockFn = jest.fn().mockReturnValue({});
		mockFn.mockImplementation((key: string) => {
			if (key === 'serviceIds') return 'vps-123';
			return {};
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, flatDefs);
		expect(result).toEqual({ id: 'vps-123' });
		expect(mockFn).toHaveBeenCalledWith('serviceIds', 0);
	});

	it('calls getNodeParameter with the correct itemIndex (e.g. 3)', () => {
		const mockFn = jest.fn().mockReturnValue({
			dateRange: { from: '2024-01-01' },
		});
		const ctx = makeCtx(mockFn);
		buildFilterQuery(ctx, 3, defs);
		expect(mockFn).toHaveBeenCalledWith('filters', 3, {});
	});

	it('uses a custom collectionName when provided', () => {
		const mockFn = jest.fn().mockReturnValue({
			status: { value: 'active' },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, defs, 'customFilters');
		expect(mockFn).toHaveBeenCalledWith('customFilters', 0, {});
		expect(result).toEqual({ status: 'active' });
	});

	// ─── multiOptions tests ──────────────────────────────────────────────

	it('transmits non-empty array for multiOptions type', () => {
		const multiDef: FilterDefinition[] = [
			{
				group: 'actions',
				groupDisplayName: 'Actions',
				name: 'value',
				displayName: 'Actions',
				queryParam: 'action',
				type: 'multiOptions',
				options: [
					{ name: 'Read', value: 'account:apiovh:me/get' },
					{ name: 'Write', value: 'account:apiovh:me/post' },
				],
			},
		];
		const mockFn = jest.fn().mockReturnValue({
			actions: { value: ['account:apiovh:me/get', 'account:apiovh:me/post'] },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, multiDef);
		expect(result).toEqual({
			action: ['account:apiovh:me/get', 'account:apiovh:me/post'],
		});
	});

	it('skips multiOptions when array is empty', () => {
		const multiDef: FilterDefinition[] = [
			{
				group: 'actions',
				groupDisplayName: 'Actions',
				name: 'value',
				displayName: 'Actions',
				queryParam: 'action',
				type: 'multiOptions',
			},
		];
		const mockFn = jest.fn().mockReturnValue({ actions: { value: [] } });
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, multiDef);
		expect(result).toBeUndefined();
	});

	it('filters out empty string values from multiOptions array', () => {
		const multiDef: FilterDefinition[] = [
			{
				group: 'actions',
				groupDisplayName: 'Actions',
				name: 'value',
				displayName: 'Actions',
				queryParam: 'action',
				type: 'multiOptions',
			},
		];
		const mockFn = jest.fn().mockReturnValue({
			actions: { value: ['account:apiovh:me/get', '', '  '] },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, multiDef);
		expect(result).toEqual({ action: ['account:apiovh:me/get'] });
	});

	// ─── json type tests ─────────────────────────────────────────────────

	it('passthroughs object for json type', () => {
		const jsonDef: FilterDefinition[] = [
			{
				group: 'tags',
				groupDisplayName: 'IAM Tags',
				name: 'value',
				displayName: 'IAM Tags',
				queryParam: 'iamTags',
				type: 'json',
			},
		];
		const mockFn = jest.fn().mockReturnValue({
			tags: { value: { env: [{ operator: 'EQ', value: 'prod' }] } },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, jsonDef);
		expect(result).toEqual({
			iamTags: { env: [{ operator: 'EQ', value: 'prod' }] },
		});
	});

	it('parses valid JSON string for json type', () => {
		const jsonDef: FilterDefinition[] = [
			{
				group: 'tags',
				groupDisplayName: 'IAM Tags',
				name: 'value',
				displayName: 'IAM Tags',
				queryParam: 'iamTags',
				type: 'json',
			},
		];
		const mockFn = jest.fn().mockReturnValue({
			tags: { value: '{"env":[{"operator":"EQ","value":"prod"}]}' },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, jsonDef);
		expect(result).toEqual({
			iamTags: { env: [{ operator: 'EQ', value: 'prod' }] },
		});
	});

	it('throws on invalid JSON string for json type', () => {
		const jsonDef: FilterDefinition[] = [
			{
				group: 'tags',
				groupDisplayName: 'IAM Tags',
				name: 'value',
				displayName: 'IAM Tags',
				queryParam: 'iamTags',
				type: 'json',
			},
		];
		const mockFn = jest.fn().mockReturnValue({ tags: { value: '{invalid json' } });
		const ctx = makeCtx(mockFn);
		expect(() => buildFilterQuery(ctx, 0, jsonDef)).toThrow(/Invalid JSON in filter "IAM Tags"/);
	});

	it('skips empty string for json type via isEmptyFilterValue', () => {
		const jsonDef: FilterDefinition[] = [
			{
				group: 'tags',
				groupDisplayName: 'IAM Tags',
				name: 'value',
				displayName: 'IAM Tags',
				queryParam: 'iamTags',
				type: 'json',
			},
		];
		const mockFn = jest.fn().mockReturnValue({ tags: { value: '' } });
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, jsonDef);
		expect(result).toBeUndefined();
	});

	// ─── delimiter tests ─────────────────────────────────────────────────

	it('splits string on delimiter and sends as array for string type with delimiter', () => {
		const delimDef: FilterDefinition[] = [
			{
				group: 'actions',
				groupDisplayName: 'Actions',
				name: 'value',
				displayName: 'Action URNs',
				queryParam: 'action',
				type: 'string',
				delimiter: ',',
			},
		];
		const mockFn = jest.fn().mockReturnValue({
			actions: { value: 'account:apiovh:me/get,account:apiovh:me/*' },
		});
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, delimDef);
		expect(result).toEqual({
			action: ['account:apiovh:me/get', 'account:apiovh:me/*'],
		});
	});

	it('skips delimiter split when resulting array is empty', () => {
		const delimDef: FilterDefinition[] = [
			{
				group: 'actions',
				groupDisplayName: 'Actions',
				name: 'value',
				displayName: 'Action URNs',
				queryParam: 'action',
				type: 'string',
				delimiter: ',',
			},
		];
		const mockFn = jest.fn().mockReturnValue({ actions: { value: '  ,  ' } });
		const ctx = makeCtx(mockFn);
		const result = buildFilterQuery(ctx, 0, delimDef);
		expect(result).toBeUndefined();
	});
});
