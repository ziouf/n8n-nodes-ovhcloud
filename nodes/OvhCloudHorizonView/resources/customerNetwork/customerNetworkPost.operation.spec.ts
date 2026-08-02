/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './customerNetworkPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('customerNetworkPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, name and network parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[1]).toMatchObject({
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Network',
				name: 'network',
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

		it('should add customer network via POST', async () => {
			const mockData = { id: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'name':
							return 'My Network';
						case 'network':
							return '10.0.0.0/24';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/customerNetwork', {
				name: 'My Network',
				network: '10.0.0.0/24',
			});
			expect(result).toEqual([mockData]);
		});
	});
});
