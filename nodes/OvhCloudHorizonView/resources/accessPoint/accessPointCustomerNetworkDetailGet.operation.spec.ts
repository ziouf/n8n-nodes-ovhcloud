/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './accessPointCustomerNetworkDetailGet.operation';

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

describe('customerNetworkDetailGet.operation', () => {
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

		it('should get customer network properties via GET', async () => {
			const mockData = { network: '10.0.0.0/24' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

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
			expect(client.httpGet).toHaveBeenCalledWith(
				'/horizonView/service1/accessPoint/urn%3Avcloud%3Aloadbalancer%3AaccessPoint1/customerNetwork/12345',
			);
			expect(result).toEqual([mockData]);
		});
	});
});
