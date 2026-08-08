/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createServiceListSearch,
	createProjectScopedServiceListSearch,
	buildListSearchResults,
} from '../shared/methods/listSearch';

jest.mock('../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		paginate: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../shared/transport/ApiClient';

describe('createServiceListSearch', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockLoadOptionsFunctions = { getNodeParameter: jest.fn().mockReturnValue('') };
	});

	// Test 1: Pagination
	it('should paginate and map results with default maxItems', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1', 'vps-2', 'vps-3']);

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 1000 });
		expect(result).toEqual({
			results: [
				{ name: 'vps-1', value: 'vps-1' },
				{ name: 'vps-2', value: 'vps-2' },
				{ name: 'vps-3', value: 'vps-3' },
			],
		});
	});

	// Test 2: Custom maxItems
	it('should use custom maxItems from options', async () => {
		const loader = createServiceListSearch('/vps', { maxItems: 10 });
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1']);

		await loader.call(mockLoadOptionsFunctions);
		expect(mockClient.paginate).toHaveBeenCalledWith('/vps', { maxItems: 10 });
	});

	// Test 3: Mapping
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

	// Test 4: Client-side filtering (substring case-insensitive)
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

	// Test 5: Case-insensitive filter
	it('should perform case-insensitive filtering', async () => {
		const loader = createServiceListSearch('/vps');
		const mockClient = (ApiClient as any)();
		(mockClient.paginate as jest.Mock).mockResolvedValue(['vps-1']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn().mockReturnValue('VPS');

		const result = await loader.call(mockLoadOptionsFunctions);
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'vps-1', value: 'vps-1' });
	});

	// Test 6: Filter absent / getNodeParameter throws
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
});

describe('createProjectScopedServiceListSearch', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test 7: Project-scoped with options
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
			{ maxItems: 5 },
		);
	});

	// Test 8: Backward compatibility (2 args, no options)
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
			{ maxItems: 1000 },
		);
		expect(result).toEqual({ results: [{ name: 'vol-1', value: 'vol-1' }] });
	});
});

describe('filterProperty', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
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
	});

	it('should filter on custom filterProperty', () => {
		const data = ['vps-1', 'vps-2', 'vps-3'];
		const options = { map: (id: string) => `Instance ${id}`, filterProperty: 'name' };
		const result = buildListSearchResults(data, options, 'vps-2');
		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'Instance vps-2', value: 'vps-2' });
	});
});
