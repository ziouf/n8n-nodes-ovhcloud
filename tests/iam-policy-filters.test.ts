/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	description,
	execute,
	IAM_POLICY_LIST_FILTERS,
} from '../nodes/OvhCloudIam/iampolicyListGet.operation';
import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('IAM policy list filters', () => {
	describe('description', () => {
		it('should include filter collection', () => {
			const result = description({ show: {} });
			const filterParam = result.find((p: any) => p.type === 'fixedCollection');
			expect(filterParam).toBeDefined();
			expect(filterParam?.name).toBe('filters');
		});

		it('should have all filter groups', () => {
			const result = description({ show: {} });
			const filterParam = result.find((p: any) => p.type === 'fixedCollection');
			const groupNames = (filterParam?.options as any[])?.map((o: any) => o.name);
			expect(groupNames).toContain('action');
			expect(groupNames).toContain('identity');
			expect(groupNames).toContain('resourceURN');
			expect(groupNames).toContain('readOnly');
			expect(groupNames).toContain('details');
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockClient.httpGet.mockReset();
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should call httpGet without filters (non-regression)', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return {};
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', undefined);
		});

		it('should call httpGet with action filter (comma-separated → array)', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return {
							action: { value: 'account:apiovh:me/get,account:apiovh:me/*' },
						};
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', {
				action: ['account:apiovh:me/get', 'account:apiovh:me/*'],
			});
		});

		it('should call httpGet with readOnly filter', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return { readOnly: { value: true } };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', {
				readOnly: true,
			});
		});

		it('should call httpGet with multiple filters combined', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return {
							action: { value: 'account:apiovh:me/get' },
							readOnly: { value: true },
							details: { value: false },
						};
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', {
				action: ['account:apiovh:me/get'],
				readOnly: true,
				details: false,
			});
		});

		it('should skip empty action filter', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return { action: { value: '' } };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', undefined);
		});

		it('should skip empty comma-separated action filter', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return { action: { value: '  ,  ' } };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', undefined);
		});

		it('should handle multi-items with different itemIndex', async () => {
			const mockData = [{ id: 'policy-1' }];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'filters':
						return {
							action: { value: 'account:apiovh:iam/policy/get' },
						};
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 3);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/iam/policy', {
				action: ['account:apiovh:iam/policy/get'],
			});
		});
	});

	describe('IAM_POLICY_LIST_FILTERS', () => {
		it('should export 5 filter definitions', () => {
			expect(IAM_POLICY_LIST_FILTERS).toHaveLength(5);
		});

		it('should have correct query params', () => {
			const queryParams = IAM_POLICY_LIST_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('action');
			expect(queryParams).toContain('identity');
			expect(queryParams).toContain('resourceURN');
			expect(queryParams).toContain('readOnly');
			expect(queryParams).toContain('details');
		});

		it('should have delimiter on string array types', () => {
			const actionDef = IAM_POLICY_LIST_FILTERS.find((f) => f.queryParam === 'action');
			expect(actionDef?.delimiter).toBe(',');
			const identityDef = IAM_POLICY_LIST_FILTERS.find((f) => f.queryParam === 'identity');
			expect(identityDef?.delimiter).toBe(',');
			const resourceURNDef = IAM_POLICY_LIST_FILTERS.find((f) => f.queryParam === 'resourceURN');
			expect(resourceURNDef?.delimiter).toBe(',');
		});

		it('should have options on boolean types', () => {
			const readOnlyDef = IAM_POLICY_LIST_FILTERS.find((f) => f.queryParam === 'readOnly');
			expect(readOnlyDef?.type).toBe('options');
			expect(readOnlyDef?.options).toHaveLength(2);
			const detailsDef = IAM_POLICY_LIST_FILTERS.find((f) => f.queryParam === 'details');
			expect(detailsDef?.type).toBe('options');
			expect(detailsDef?.options).toHaveLength(2);
		});
	});
});
