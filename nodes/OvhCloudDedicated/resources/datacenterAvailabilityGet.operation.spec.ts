/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './datacenterAvailabilityGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('datacenterAvailabilityGet.operation', () => {
	describe('description', () => {
		it('should return all 8 filter parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(8);
			expect(result[0]).toMatchObject({ name: 'datacenters', type: 'string' });
			expect(result[1]).toMatchObject({ name: 'excludeDatacenters', type: 'boolean' });
			expect(result[2]).toMatchObject({ name: 'gpu', type: 'string' });
			expect(result[3]).toMatchObject({ name: 'memoryInGB', type: 'number' });
			expect(result[4]).toMatchObject({ name: 'planCode', type: 'string' });
			expect(result[5]).toMatchObject({ name: 'serverModel', type: 'string' });
			expect(result[6]).toMatchObject({ name: 'storage', type: 'string' });
			expect(result[7]).toMatchObject({ name: 'systemStorage', type: 'string' });
		});

		it('should have correct defaults for each parameter', () => {
			const result = description({ show: {} });
			expect((result[0] as any).default).toBe('');
			expect((result[1] as any).default).toBe(false);
			expect((result[2] as any).default).toBe('');
			expect((result[3] as any).default).toBe(0);
		});

		it('should include descriptions for all parameters', () => {
			const result = description({ show: {} });
			for (const prop of result) {
				expect(prop.description).toBeTruthy();
			}
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should fetch availabilities with no filters', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ name: 'gra1' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'datacenters':
						return '';
					case 'excludeDatacenters':
						return false;
					case 'gpu':
						return '';
					case 'memoryInGB':
						return 0;
					case 'planCode':
						return '';
					case 'serverModel':
						return '';
					case 'storage':
						return '';
					case 'systemStorage':
						return '';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicated/server/datacenter/availabilities',
				{},
			);
			expect(result[0]).toEqual([{ name: 'gra1' }]);
		});

		it('should fetch availabilities with datacenters filter (comma-separated)', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ name: 'par2' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'datacenters':
						return 'gra1,par2';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/dedicated/server/datacenter/availabilities', {
				datacenters: ['gra1', 'par2'],
			});
			expect(result[0]).toEqual([{ name: 'par2' }]);
		});

		it('should fetch availabilities with excludeDatacenters=true', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ name: 'fra3' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'datacenters':
						return 'gra1';
					case 'excludeDatacenters':
						return true;
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/dedicated/server/datacenter/availabilities', {
				datacenters: ['gra1'],
				excludeDatacenters: true,
			});
			expect(result[0]).toEqual([{ name: 'fra3' }]);
		});

		it('should fetch availabilities with all filters set', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ name: 'par2' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'datacenters':
						return '';
					case 'excludeDatacenters':
						return false;
					case 'gpu':
						return 'NVIDIA A100';
					case 'memoryInGB':
						return 64;
					case 'planCode':
						return 'standard-gpu';
					case 'serverModel':
						return 'gpu';
					case 'storage':
						return 'NVMe SSD';
					case 'systemStorage':
						return 'HDD';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicated/server/datacenter/availabilities',
				expect.objectContaining({
					gpu: 'NVIDIA A100',
					memoryInGB: 64,
					planCode: 'standard-gpu',
					server: 'gpu',
					storage: 'NVMe SSD',
					systemStorage: 'HDD',
				}),
			);
			expect(result[0]).toEqual([{ name: 'par2' }]);
		});

		it('should not include memoryInGB when zero (default)', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'memoryInGB':
						return 0;
					default:
						return undefined;
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicated/server/datacenter/availabilities',
				expect.not.objectContaining({ memoryInGB: expect.any(Number) }),
			);
		});
	});
});
