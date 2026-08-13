/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './accessPointCustomerNetworkGet.operation';

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

describe('customerNetworkGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and accessPointId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[1]).toMatchObject({
				displayName: 'Access Point ID',
				name: 'accessPointId',
				type: 'string',
				default: '',
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

		it('should list customer networks via GET', async () => {
			const mockData = [12345, 67890];
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
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/horizonView/service1/accessPoint/urn%3Avcloud%3Aloadbalancer%3AaccessPoint1/customerNetwork',
			);
			expect(result).toEqual([{ customerNetworkId: 12345 }, { customerNetworkId: 67890 }]);
		});
	});
});
