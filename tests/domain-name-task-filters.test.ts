/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for OvhCloudDomain domainNameTaskListGet operation filters.
 *
 * Verifies filter definitions, UI collection, and query param building.
 */

import {
	description,
	execute,
	DOMAIN_NAME_TASK_FILTERS,
} from '../nodes/OvhCloudDomain/resources/name/domainNameTaskListGet.operation';

// --- Mocks ---

const mockHttpGet = jest.fn();
const mockClient: any = { httpGet: mockHttpGet };

jest.mock('../shared/transport/ApiClient', () => ({
	getClient: jest.fn(() => mockClient),
	ApiClient: jest.fn(() => mockClient),
}));

describe('OvhCloudDomain domainNameTaskListGet filters', () => {
	let mockCtx: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockHttpGet.mockResolvedValue([]);

		mockCtx = {
			getInputData: jest.fn(() => [{ json: {}, index: 0 }]),
			getNodeParameter: jest.fn((key: string, _idx: number, def?: any, _opts?: any) => {
				if (key === 'domainName') {
					return def ?? '';
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
		it('should return 2 properties: domainName + fixedCollection filters', () => {
			const props = description({ show: {} });
			expect(props).toHaveLength(2);
			expect(props[0].name).toBe('domainName');
			expect(props[1].name).toBe('filters');
			expect(props[1].type).toBe('fixedCollection');
		});

		it('should expose search, status and type groups in the filters collection', () => {
			const props = description({ show: {} });
			const filtersProp = props.find((p) => p.name === 'filters')!;
			const options = (filtersProp as any).options as Array<{ name: string }>;
			const groupNames = options.map((o: any) => o.name);
			expect(groupNames).toContain('search');
			expect(groupNames).toContain('status');
			expect(groupNames).toContain('type');
		});
	});

	// --- DOMAIN_NAME_TASK_FILTERS ---

	describe('DOMAIN_NAME_TASK_FILTERS', () => {
		it('should have 3 definitions', () => {
			expect(DOMAIN_NAME_TASK_FILTERS).toHaveLength(3);
		});

		it('should define function, status and type query params', () => {
			const queryParams = DOMAIN_NAME_TASK_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('function');
			expect(queryParams).toContain('status');
			expect(queryParams).toContain('type');
		});

		it('should have correct status enum options', () => {
			const statusDef = DOMAIN_NAME_TASK_FILTERS.find((f) => f.queryParam === 'status');
			expect(statusDef).toBeDefined();
			expect(statusDef!.type).toBe('options');
			expect(statusDef!.options).toEqual([
				{ name: 'Cancelled', value: 'cancelled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'Error', value: 'error' },
				{ name: 'Problem', value: 'problem' },
				{ name: 'Todo', value: 'todo' },
			]);
		});

		it('should have correct type enum options', () => {
			const typeDef = DOMAIN_NAME_TASK_FILTERS.find((f) => f.queryParam === 'type');
			expect(typeDef).toBeDefined();
			expect(typeDef!.type).toBe('options');
			expect(typeDef!.options).toEqual([
				{ name: 'AllDom', value: 'alldom' },
				{ name: 'Domain', value: 'domain' },
			]);
		});

		it('should have string type for function filter', () => {
			const funcDef = DOMAIN_NAME_TASK_FILTERS.find((f) => f.queryParam === 'function');
			expect(funcDef).toBeDefined();
			expect(funcDef!.type).toBe('string');
		});
	});

	// --- execute without filters ---

	describe('execute (no filters)', () => {
		it('should call httpGet with undefined query params when no filters provided', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, _idx: number, def?: any) => {
				if (key === 'domainName') return 'example.com';
				if (key === 'filters') return {};
				return def;
			});

			await execute.call(mockCtx, 0);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain/name/example.com/task', undefined);
		});
	});

	// --- execute with filters ---

	describe('execute (with filters)', () => {
		it('should pass filter query params to httpGet', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, _idx: number, def?: any) => {
				if (key === 'domainName') return 'example.com';
				if (key === 'filters') {
					return {
						search: { value: 'update' },
						status: { value: 'doing' },
						type: { value: 'domain' },
					};
				}
				return def;
			});

			await execute.call(mockCtx, 0);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain/name/example.com/task', {
				function: 'update',
				status: 'doing',
				type: 'domain',
			});
		});
	});

	// --- multi-item ---

	describe('multi-item', () => {
		it('should call getNodeParameter with the correct itemIndex for filters', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, idx: number, def?: any) => {
				if (key === 'domainName') return 'example.com';
				if (key === 'filters') return {};
				return def;
			});
			mockCtx.getInputData.mockReturnValue([{ json: {} }, { json: {} }, { json: {} }]);

			await execute.call(mockCtx, 2);

			expect(mockCtx.getNodeParameter).toHaveBeenCalledWith('filters', 2, {});
			expect(mockCtx.getInputData()).toHaveLength(3);
		});
	});

	// --- returnJsonArray behaviour ---

	describe('returnJsonArray', () => {
		it('should wrap data in array via returnJsonArray', async () => {
			mockCtx.getNodeParameter.mockImplementation((key: string, _idx: number, def?: any) => {
				if (key === 'domainName') return 'example.com';
				if (key === 'filters') return {};
				return def;
			});
			mockHttpGet.mockResolvedValue([]);

			await execute.call(mockCtx, 0);

			expect(mockCtx.helpers.returnJsonArray).toHaveBeenCalledWith([[]]);
		});
	});
});
