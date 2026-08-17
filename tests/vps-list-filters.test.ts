/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute, VPS_LIST_FILTERS } from '../nodes/OvhCloudVps/list.operation';
import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('VPS list filters', () => {
	describe('description', () => {
		it('should include filter collection', () => {
			const result = description({ show: {} });
			const filterParam = result.find((p: any) => p.type === 'fixedCollection');
			expect(filterParam).toBeDefined();
			expect(filterParam?.name).toBe('filters');
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockClient.httpGet.mockReset();
			mockClient.paginateResources.mockReset();
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should call httpGet without filters (non-regression)', async () => {
			const mockData = ['vps-1', 'vps-2'];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'returnFullObjects':
						return false;
					case 'maxItems':
						return 1000;
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', undefined);
		});

		it('should call httpGet with iamTags JSON filter', async () => {
			const mockData = ['vps-1'];
			mockClient.httpGet.mockResolvedValue(mockData);

			const parsedIamTags = { env: [{ operator: 'EQ', value: 'prod' }] };
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'returnFullObjects':
						return false;
					case 'maxItems':
						return 1000;
					case 'filters':
						return { iamTags: [{ value: JSON.stringify(parsedIamTags) }] };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', {
				iamTags: parsedIamTags,
			});
		});

		it('should throw on invalid JSON in iamTags filter', async () => {
			mockClient.httpGet.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'returnFullObjects':
						return false;
					case 'maxItems':
						return 1000;
					case 'filters':
						return { iamTags: [{ value: '{invalid json' }] };
					default:
						return {};
				}
			});

			await expect(execute.call(mockExecuteFunctions, 0)).rejects.toThrow(
				/Invalid JSON in filter "IAM Tags"/,
			);
		});

		it('should call httpGet for list + details when returnFullObjects and filters present', async () => {
			const ids = ['vps-1'];
			const mockData = [{ name: 'vps-1' }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(mockData[0]);

			const parsedIamTags = { env: [{ operator: 'EQ', value: 'prod' }] };
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'returnFullObjects':
						return true;
					case 'maxItems':
						return 100;
					case 'filters':
						return { iamTags: [{ value: JSON.stringify(parsedIamTags) }] };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', {
				iamTags: parsedIamTags,
			});
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps/vps-1');
		});

		it('should call httpGet without query when no filters (non-regression)', async () => {
			const ids = ['vps-1'];
			const mockData = [{ name: 'vps-1' }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(mockData[0]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'returnFullObjects':
						return true;
					case 'maxItems':
						return 100;
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps/vps-1');
		});

		it('should handle multi-items with different itemIndex', async () => {
			const mockData = ['vps-1'];
			mockClient.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'returnFullObjects':
						return false;
					case 'maxItems':
						return 1000;
					case 'filters':
						return { iamTags: [{ value: '{"env":["prod"]}' }] };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 3);
			expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', {
				iamTags: { env: ['prod'] },
			});
		});
	});

	describe('VPS_LIST_FILTERS', () => {
		it('should export filter definitions', () => {
			expect(VPS_LIST_FILTERS).toHaveLength(1);
			expect(VPS_LIST_FILTERS[0]!.queryParam).toBe('iamTags');
			expect(VPS_LIST_FILTERS[0]!.type).toBe('json');
		});
	});
});
