/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './backupCloudGetByIdGet.operation';

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

describe('backupCloudGetByIdGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and backupId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Dedicated Server Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: {},
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Backup Cloud ID',
				name: 'backupId',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should get backup cloud by ID via GET', async () => {
			const mockData = { id: '1234567' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'ns123456.ip-123-45-678.eu';
						case 'backupId':
							return '1234567';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupCloud/get/1234567',
			);
			expect(result).toEqual([{ id: '1234567' }]);
		});

		it('should URL encode the backup ID in the path', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'ns123456.ip-123-45-678.eu';
						case 'backupId':
							return 'abc/def';
						default:
							return '';
					}
				},
			);

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupCloud/get/abc%2Fdef',
			);
		});

		it('should throw if backupId is missing', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'ns123456.ip-123-45-678.eu';
						default:
							throw new Error('not found');
					}
				},
			);

			await expect(execute.call(mockExecuteFunctions, 0)).rejects.toThrow(
				'"Backup Cloud ID" is required',
			);
		});
	});
});
