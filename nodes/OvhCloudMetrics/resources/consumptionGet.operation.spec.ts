/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './consumptionGet.operation';

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

describe('consumptionGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and duration parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Metrics Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
								required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: 0,
			});
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

		it('should get consumption via GET with duration', async () => {
			const mockData = { ddp: 80, mads: 45 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics-12345';
					switch (param) {
						case 'serviceName':
							return 'metrics-12345';
						case 'duration':
							return 30;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/metrics/metrics-12345/consumption', {
				duration: 30,
			});
			expect(result).toEqual([mockData]);
		});

		it('should omit duration query param when not set', async () => {
			const mockData = { ddp: 80, mads: 45 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics-12345';
					switch (param) {
						case 'serviceName':
							return 'metrics-12345';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/metrics/metrics-12345/consumption', {});
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics 12345';
					switch (param) {
						case 'serviceName':
							return 'metrics 12345';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/metrics/metrics%2012345/consumption', {});
		});
	});
});
