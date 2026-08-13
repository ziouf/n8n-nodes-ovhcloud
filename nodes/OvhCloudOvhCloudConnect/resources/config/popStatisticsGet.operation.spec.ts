/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './popStatisticsGet.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('popStatisticsGet.operation', () => {
	describe('description', () => {
		it('should return the correct number of parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				displayName: 'OvhCloudConnect Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for the service locator', () => {
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

		it('should call the correct API endpoint via GET', async () => {
			const mockData = [{ name: 'item-1' }, { name: 'item-2' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return 'svc-1';
								switch (param) {
									case 'serviceName':
										return 'svc-1';
									case 'popId':
										return 12345;
									case 'period':
										return "1HOUR";
									case 'type':
										return "cpu";
									default:
										return def ?? undefined;
								}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/ovhCloudConnect/svc-1/config/pop/12345/statistics', { period: '1HOUR', type: 'cpu' });
			expect(result).toEqual([{ name: 'item-1' }, { name: 'item-2' }]);
		});

		it('should encode special characters in path parameters', async () => {
			const mockData = [{ name: 'item-1' }, { name: 'item-2' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return 'svc 1';
								switch (param) {
									case 'serviceName':
										return 'svc 1';
									case 'popId':
										return 98765;
									case 'period':
										return "1DAY";
									case 'type':
										return "memory";
									default:
										return def ?? undefined;
								}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/ovhCloudConnect/svc%201/config/pop/98765/statistics', { period: '1DAY', type: 'memory' });
		});
	});
});