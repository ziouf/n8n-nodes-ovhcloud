/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for OvhCloudHosting listTasks operation filters.
 *
 * Verifies filter definitions, UI collection, and query param building.
 */

import {
	description,
	execute,
	HOSTING_TASK_FILTERS,
} from '../nodes/OvhCloudHosting/listTasks.operation';

// --- Mocks ---

const mockHttpGet = jest.fn();
const mockClient: any = { httpGet: mockHttpGet };

jest.mock('../shared/transport/ApiClient', () => ({
	getClient: jest.fn(() => mockClient),
	ApiClient: jest.fn(() => mockClient),
}));

describe('OvhCloudHosting listTasks filters', () => {
	let mockCtx: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockHttpGet.mockResolvedValue([1, 2, 3]);

		mockCtx = {
			getInputData: jest.fn(() => [{ json: {}, index: 0 }]),
			getNodeParameter: jest.fn((key: string, _idx: number, def?: any, _opts?: any) => {
				if (key === 'serviceName') {
					return def ?? ''; // extracted value handled by resourceLocator
				}
				if (key === 'filters') {
					return def ?? {};
				}
				return def;
			}),
			helpers: {
				returnJsonArray: jest.fn((data: any) => data),
			},
		};
	});

	// --- description ---

	describe('description', () => {
		it('should return 2 properties: serviceName + fixedCollection filters', () => {
			const props = description({ show: {} });
			expect(props).toHaveLength(2);
			expect(props[0].name).toBe('serviceName');
			expect(props[1].name).toBe('filters');
			expect(props[1].type).toBe('fixedCollection');
		});

		it('should expose search and status groups in the filters collection', () => {
			const props = description({ show: {} });
			const filtersProp = props.find((p) => p.name === 'filters')!;
			const options = (filtersProp as any).options as Array<{ name: string }>;
			const groupNames = options.map((o: any) => o.name);
			expect(groupNames).toContain('search');
			expect(groupNames).toContain('status');
		});
	});

	// --- HOSTING_TASK_FILTERS ---

	describe('HOSTING_TASK_FILTERS', () => {
		it('should have 2 definitions', () => {
			expect(HOSTING_TASK_FILTERS).toHaveLength(2);
		});

		it('should define function and status query params', () => {
			const queryParams = HOSTING_TASK_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('function');
			expect(queryParams).toContain('status');
		});

		it('should have correct status enum options', () => {
			const statusDef = HOSTING_TASK_FILTERS.find((f) => f.queryParam === 'status');
			expect(statusDef).toBeDefined();
			expect(statusDef!.type).toBe('options');
			expect(statusDef!.options).toEqual([
				{ name: 'Cancelled', value: 'cancelled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'Init', value: 'init' },
				{ name: 'Todo', value: 'todo' },
			]);
		});
	});

	// --- execute without filters ---

	describe('execute (no filters)', () => {
		it('should call httpGet with undefined query params when no filters provided', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, _idx: number, def?: any) => {
				if (key === 'serviceName') return 'test.tld';
				if (key === 'filters') return {};
				return def;
			});

			await execute.call(mockCtx, 0);

			expect(mockHttpGet).toHaveBeenCalledWith('/hosting/web/test.tld/tasks', undefined);
		});
	});

	// --- execute with filters ---

	describe('execute (with filters)', () => {
		it('should pass filter query params to httpGet', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, _idx: number, def?: any) => {
				if (key === 'serviceName') return 'test.tld';
				if (key === 'filters') {
					return {
						search: [{ value: 'install' }],
						status: [{ value: 'doing' }],
					};
				}
				return def;
			});

			await execute.call(mockCtx, 0);

			expect(mockHttpGet).toHaveBeenCalledWith('/hosting/web/test.tld/tasks', {
				function: 'install',
				status: 'doing',
			});
		});
	});

	// --- multi-item ---

	describe('multi-item', () => {
		it('should call getNodeParameter with the correct itemIndex for filters', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, idx: number, def?: any) => {
				if (key === 'serviceName') return 'test.tld';
				if (key === 'filters') return {};
				return def;
			});
			mockCtx.getInputData.mockReturnValue([{ json: {} }, { json: {} }, { json: {} }]);

			await execute.call(mockCtx, 2);

			expect(mockCtx.getNodeParameter).toHaveBeenCalledWith('filters', 2, {});
			expect(mockCtx.getInputData()).toHaveLength(3);
		});
	});
});
