/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createServiceListSearch,
	createProjectScopedServiceListSearch,
	buildListSearchResults,
	clearListSearchCache,
} from '../shared/methods/listSearch';

jest.mock('../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		paginate: jest.fn(),
		getCredentialScope: jest.fn().mockResolvedValue('scope-default'),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../shared/transport/ApiClient';

describe('createServiceListSearch', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		clearListSearchCache();
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	// Test 1: Pagination — first page, not truncated → no cursor
	it('should paginate and map results with default maxItems', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2', 'vps-3']);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 1001 });
		expect(result).toEqual({
			results: [
				{ name: 'vps-1', value: 'vps-1' },
				{ name: 'vps-2', value: 'vps-2' },
				{ name: 'vps-3', value: 'vps-3' },
			],
		});
		expect(result.paginationToken).toBeUndefined();
	});

	// Test 2: First page full at maxItems → paginationToken === String(maxItems) (real cursor)
	it('should return a real paginationToken when first page is full', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		// probe: maxItems + 1 = 6 items returned → truncated
		(mockClient.paginate as jest.Mock).mockResolvedValue([
			'vps-1',
			'vps-2',
			'vps-3',
			'vps-4',
			'vps-5',
			'vps-6',
		]);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 6 });
		expect(result.results).toHaveLength(5);
		expect(result.paginationToken).toBe('5');
	});

	// Test 3: Custom maxItems
	it('should use custom maxItems from options', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 10 });
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1']);

		await loader.call(mockLoadOptionsFunctions);
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 11 });
	});

	// Test 4: Mapping
	it('should apply custom map function', async () => {
		const loader = createServiceListSearch('/support/tickets', {
			map: (id) => `Ticket #${id}`,
		});
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['12', '34']);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result).toEqual({
			results: [
				{ name: 'Ticket #12', value: '12' },
				{ name: 'Ticket #34', value: '34' },
			],
		});
	});

	// Test 5: Client-side filtering (substring case-insensitive)
	it('should filter results by filter text (substring, case-insensitive)', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-9', 'vps-99']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockReturnValue('vps-9');

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.results).toHaveLength(2);
		expect(result.results[0]).toEqual({ name: 'vps-9', value: 'vps-9' });
		expect(result.results[1]).toEqual({ name: 'vps-99', value: 'vps-99' });
	});

	// Test 6: Case-insensitive filter
	it('should perform case-insensitive filtering', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockReturnValue('VPS');

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'vps-1', value: 'vps-1' });
	});

	// Test 7: Filter absent / getNodeParameter throws
	it('should return all results when filter parameter throws', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockImplementation(() => {
			throw new Error('Parameter not found');
		});

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.results).toHaveLength(2);
		expect(result.results).toEqual([
			{ name: 'vps-1', value: 'vps-1' },
			{ name: 'vps-2', value: 'vps-2' },
		]);
	});

	// Test 8: Passed filter arg takes precedence over node-param filter
	it('should use passed filter arg when provided', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2', 'vps-9']);
		// Node param says 'vps-1' but passed filter is 'vps-9'
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockReturnValue('vps-1');

		const result = await loader.call(mockLoadOptionsFunctions, 'vps-9');
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'vps-9', value: 'vps-9' });
	});

	// Test 9: Short/last page → no paginationToken
	it('should not return paginationToken on short last page', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		// Only 3 items returned — not full, so no cursor
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2', 'vps-3']);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.paginationToken).toBeUndefined();
	});

	// Test 10: Loader called with paginationToken → paginate called with offset
	it('should call paginate with offset when paginationToken is provided', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		// Page at offset 5: 3 items (not full)
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-6', 'vps-7', 'vps-8']);

		const result = await loader.call(mockLoadOptionsFunctions, '', '5');
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 5, offset: 5 });
		expect(result.results).toHaveLength(3);
		// Not full page → no next cursor
		expect(result.paginationToken).toBeUndefined();
	});

	// Test 11: Full page with paginationToken → next cursor returned
	it('should return next paginationToken when paginated page is full', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		// Page at offset 5: exactly 5 items (full)
		(mockClient.paginate as jest.Mock).mockResolvedValue([
			'vps-6',
			'vps-7',
			'vps-8',
			'vps-9',
			'vps-10',
		]);

		const result = await loader.call(mockLoadOptionsFunctions, '', '5');
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 5, offset: 5 });
		expect(result.paginationToken).toBe('10'); // offset + length = 5 + 5
	});

	// Test 12: Round-trip cursor from truncated first page
	it('should round-trip: String(maxItems) from truncated first page fetches next page', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 3 });
		const mockClient = (ApiClient as any)();

		// First call: probe returns 4 items → truncated → cursor = '3'
		(mockClient.paginate as jest.Mock).mockResolvedValueOnce(['vps-1', 'vps-2', 'vps-3', 'vps-4']);

		const firstResult = await loader.call(mockLoadOptionsFunctions);
		expect(firstResult.results).toHaveLength(3);
		expect(firstResult.paginationToken).toBe('3');

		// Second call with cursor '3': fetch offset 3, maxItems 3
		(mockClient.paginate as jest.Mock).mockResolvedValueOnce(['vps-4', 'vps-5']);

		const secondResult = await loader.call(mockLoadOptionsFunctions, '', '3');
		expect(mockClient.paginate).toHaveBeenNthCalledWith(2, '/vps', { maxItems: 3, offset: 3 });
		expect(secondResult.results).toHaveLength(2);
		expect(secondResult.paginationToken).toBeUndefined(); // last page
	});

	// Test 13: NaN cursor defaults to offset 0
	it('should treat NaN paginationToken as offset 0', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		// NaN token goes through pagination branch (no +1 probe), offset 0
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1']);

		await loader.call(mockLoadOptionsFunctions, '', 'not-a-number');
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 5, offset: 0 });
	});
});

describe('createProjectScopedServiceListSearch', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		clearListSearchCache();
	});

	// Test 14: Project-scoped with options
	it('should resolve project id, build route and apply options', async () => {
		const loader = createProjectScopedServiceListSearch(
			(p) => `/publicCloud/project/${p}/blockStorage/volume`,
			'publicCloudProjectId',
			{ maxItems: 5 },
		);
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vol-1']);

		const mockCtx = {
			getNodeParameter: jest.fn().mockImplementation((key: string) => {
				if (key === 'publicCloudProjectId') {
					return { mode: 'list', value: 'proj-1' };
				}
				return '';
			}),
		};

		await loader.call(mockCtx);
		expect(mockClient.paginate).toHaveBeenCalledWith(
			'/publicCloud/project/proj-1/blockStorage/volume',
			{ maxItems: 6 },
		);
	});

	// Test 15: Backward compatibility (2 args, no options)
	it('should work with 2 arguments (backward compatible)', async () => {
		const loader = createProjectScopedServiceListSearch(
			(p) => `/publicCloud/project/${p}/blockStorage/volume`,
			'publicCloudProjectId',
		);
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vol-1']);

		const mockCtx = {
			getNodeParameter: jest.fn().mockImplementation((key: string) => {
				if (key === 'publicCloudProjectId') return 'proj-abc';
				return '';
			}),
		};

		const result = await loader.call(mockCtx);
		expect(mockClient.paginate).toHaveBeenCalledWith(
			'/publicCloud/project/proj-abc/blockStorage/volume',
			{ maxItems: 1001 },
		);
		expect(result).toEqual({ results: [{ name: 'vol-1', value: 'vol-1' }] });
	});

	// Test 16: Project-scoped with paginationToken
	it('should pass paginationToken through to loadAndMapResults', async () => {
		const loader = createProjectScopedServiceListSearch(
			(p) => `/publicCloud/project/${p}/blockStorage/volume`,
			'publicCloudProjectId',
			{ maxItems: 5 },
		);
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vol-6', 'vol-7']);

		const mockCtx = {
			getNodeParameter: jest.fn().mockImplementation((key: string) => {
				if (key === 'publicCloudProjectId') return 'proj-1';
				return '';
			}),
		};

		const result = await loader.call(mockCtx, '', '5');
		expect(mockClient.paginate).toHaveBeenCalledWith(
			'/publicCloud/project/proj-1/blockStorage/volume',
			{ maxItems: 5, offset: 5 },
		);
		expect(result.results).toHaveLength(2);
	});

	// Test 17: Passed filter arg takes precedence in project-scoped loader
	it('should use passed filter arg when provided (project-scoped)', async () => {
		const loader = createProjectScopedServiceListSearch(
			(p) => `/publicCloud/project/${p}/blockStorage/volume`,
			'publicCloudProjectId',
		);
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vol-1', 'vol-a', 'vol-b']);

		const mockCtx = {
			getNodeParameter: jest.fn().mockImplementation((key: string) => {
				if (key === 'publicCloudProjectId') return 'proj-1';
				if (key === 'filter') return 'vol-1'; // node param filter
				return '';
			}),
		};

		// Passed filter 'vol-b' should override node-param filter 'vol-1'
		const result = await loader.call(mockCtx, 'vol-b');
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'vol-b', value: 'vol-b' });
	});
});

describe('filterProperty', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		clearListSearchCache();
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	it('should filter on custom property when filterProperty is set', async () => {
		const loader = createServiceListSearch('/support/tickets', {
			map: (id) => `Ticket #${id}`,
			filterProperty: 'name',
		});
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['12', '34', '56']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockReturnValue('34');

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'Ticket #34', value: '34' });
	});

	it('should filter on value property when filterProperty is "value"', async () => {
		const loader = createServiceListSearch('/vps', {
			filterProperty: 'value',
		});
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2', 'cd-99']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockReturnValue('cd-99');

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'cd-99', value: 'cd-99' });
	});
});

describe('buildListSearchResults', () => {
	it('should map and filter results correctly', () => {
		const data = ['vps-1', 'vps-2', 'vps-3'];
		const options = { map: (id: string) => `VPS ${id}` };
		const result = buildListSearchResults(data, options, '');
		expect(result.results).toEqual([
			{ name: 'VPS vps-1', value: 'vps-1' },
			{ name: 'VPS vps-2', value: 'vps-2' },
			{ name: 'VPS vps-3', value: 'vps-3' },
		]);
		expect(result.paginationToken).toBeUndefined();
	});

	it('should filter on custom filterProperty', () => {
		const data = ['vps-1', 'vps-2', 'vps-3'];
		const options = { map: (id: string) => `Instance ${id}`, filterProperty: 'name' };
		const result = buildListSearchResults(data, options, 'vps-2');
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'Instance vps-2', value: 'vps-2' });
	});

	it('should include paginationToken when provided', () => {
		const data = ['vps-1', 'vps-2'];
		const options = undefined;
		const result = buildListSearchResults(data, options, '', '5');
		expect(result.results).toHaveLength(2);
		expect(result.paginationToken).toBe('5');
	});

	it('should not include paginationToken when undefined', () => {
		const data = ['vps-1'];
		const result = buildListSearchResults(data, undefined, '', undefined);
		expect(result.paginationToken).toBeUndefined();
	});

	it('should not include paginationToken when empty string', () => {
		const data = ['vps-1'];
		const result = buildListSearchResults(data, undefined, '', '');
		expect(result.paginationToken).toBeUndefined();
	});

	// --- Client-side sorting tests ---

	it('should sort results by name (case-insensitive) by default', () => {
		const data = ['vps-2', 'vps-10', 'vps-1', 'VPS-3'];
		const result = buildListSearchResults(data, undefined, '');
		expect(result.results).toEqual([
			{ name: 'vps-1', value: 'vps-1' },
			{ name: 'vps-10', value: 'vps-10' },
			{ name: 'vps-2', value: 'vps-2' },
			{ name: 'VPS-3', value: 'VPS-3' },
		]);
	});

	it('should preserve input order when sort is false', () => {
		const data = ['z', 'a', 'm'];
		const result = buildListSearchResults(data, { sort: false }, '');
		expect(result.results).toEqual([
			{ name: 'z', value: 'z' },
			{ name: 'a', value: 'a' },
			{ name: 'm', value: 'm' },
		]);
	});

	it('should sort by value when sortKey is "value"', () => {
		const data = ['b', 'a', 'c'];
		const options = { map: (id: string) => `Item ${id}`, sortKey: 'value' as const };
		const result = buildListSearchResults(data, options, '');
		expect(result.results).toEqual([
			{ name: 'Item a', value: 'a' },
			{ name: 'Item b', value: 'b' },
			{ name: 'Item c', value: 'c' },
		]);
	});

	it('should sort then filter when filter is active', () => {
		const data = ['vps-10', 'vps-2', 'vps-1', 'vps-9'];
		const result = buildListSearchResults(data, undefined, 'vps-1');
		expect(result.results).toHaveLength(2);
		// Sorted subset: vps-1 then vps-10
		expect(result.results).toEqual([
			{ name: 'vps-1', value: 'vps-1' },
			{ name: 'vps-10', value: 'vps-10' },
		]);
	});

	it('should produce sorted results on both cache miss and cache hit', () => {
		const data = ['vps-3', 'vps-1', 'vps-2'];
		// First call (cache miss)
		const result1 = buildListSearchResults(data, undefined, '');
		// Second call (same data — simulates cache hit path)
		const result2 = buildListSearchResults(data, undefined, '');
		expect(result1.results).toEqual([
			{ name: 'vps-1', value: 'vps-1' },
			{ name: 'vps-2', value: 'vps-2' },
			{ name: 'vps-3', value: 'vps-3' },
		]);
		expect(result2.results).toEqual(result1.results);
	});
});

describe('cache isolation by credential scope', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		clearListSearchCache();
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	it('same route, two scopes → paginate called twice (no cross-scope hit)', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock)
			.mockResolvedValueOnce('scope-a')
			.mockResolvedValueOnce('scope-b');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		// First call with scope-a
		await loader.call(mockLoadOptionsFunctions);
		// Second call with scope-b
		await loader.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledTimes(2);
	});

	it('same route + scope twice → cache hit (paginate once)', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock).mockResolvedValue('scope-a');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		await loader.call(mockLoadOptionsFunctions);
		await loader.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledTimes(1);
	});

	it('cacheTtlMs: 1 + short await → refetch after TTL', async () => {
		const loader = createServiceListSearch('/vps', { cacheTtlMs: 1 });
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock).mockResolvedValue('scope-a');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		await loader.call(mockLoadOptionsFunctions);
		// Wait for TTL to expire
		await new Promise((r) => setTimeout(r, 10));
		await loader.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledTimes(2);
	});

	it('clearListSearchCache() forces refetch', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock).mockResolvedValue('scope-a');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		await loader.call(mockLoadOptionsFunctions);
		clearListSearchCache();
		await loader.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledTimes(2);
	});

	it('cacheTtlMs: 0 disables caching', async () => {
		const loader = createServiceListSearch('/vps', { cacheTtlMs: 0 });
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock).mockResolvedValue('scope-a');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		await loader.call(mockLoadOptionsFunctions);
		await loader.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledTimes(2);
	});
});

describe('cache isolation per (scope, route, offset)', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		clearListSearchCache();
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	it('same (scope, route), different offsets → separate fetches', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock).mockResolvedValue('scope-a');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2']);

		// First call: offset 0 (initial page)
		await loader.call(mockLoadOptionsFunctions);
		expect(mockClient.paginate).toHaveBeenCalledTimes(1);

		// Second call with paginationToken '5' → offset 5
		await loader.call(mockLoadOptionsFunctions, '', '5');
		expect(mockClient.paginate).toHaveBeenCalledTimes(2);

		// Third call with paginationToken '10' → offset 10
		await loader.call(mockLoadOptionsFunctions, '', '10');
		expect(mockClient.paginate).toHaveBeenCalledTimes(3);
	});

	it('same (scope, route, offset) → cache hit', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 5 });
		const mockClient = (ApiClient as any)();
		(mockClient.getCredentialScope as jest.Mock).mockResolvedValue('scope-a');
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-6', 'vps-7']);

		// First call with token '5'
		await loader.call(mockLoadOptionsFunctions, '', '5');
		expect(mockClient.paginate).toHaveBeenCalledTimes(1);

		// Second call with same token '5' → cache hit
		await loader.call(mockLoadOptionsFunctions, '', '5');
		expect(mockClient.paginate).toHaveBeenCalledTimes(1);
	});
});
