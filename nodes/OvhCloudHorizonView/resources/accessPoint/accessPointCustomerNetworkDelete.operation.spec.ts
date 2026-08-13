/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './accessPointCustomerNetworkDelete.operation';

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

describe('customerNetworkDelete.operation', () => {
	describe('description', () => {
		it('should return serviceName, accessPointId and customerNetworkId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[2]).toMatchObject({
				displayName: 'Customer Network ID',
				name: 'customerNetworkId',
				type: 'number',
				default: 0,
				required: true,
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

		it('should delete customer network via DELETE', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'accessPointId':
							return 'urn:vcloud:loadbalancer:accessPoint1';
						case 'customerNetworkId':
							return 12345;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/horizonView/service1/accessPoint/urn%3Avcloud%3Aloadbalancer%3AaccessPoint1/customerNetwork/12345',
			);
			expect(result).toEqual([mockData]);
		});
	});
});
