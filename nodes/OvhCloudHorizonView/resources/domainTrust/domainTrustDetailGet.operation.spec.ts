/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './domainTrustDetailGet.operation';

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

describe('domainTrustDetailGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and domainTrustId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[1]).toMatchObject({
				displayName: 'Domain Trust ID',
				name: 'domainTrustId',
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

		it('should get domain trust properties via GET', async () => {
			const mockData = { domainTrustId: 12345, domain: 'example.com' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'domainTrustId':
							return 12345;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/horizonView/service1/domainTrust/12345');
			expect(result).toEqual([mockData]);
		});
	});
});
