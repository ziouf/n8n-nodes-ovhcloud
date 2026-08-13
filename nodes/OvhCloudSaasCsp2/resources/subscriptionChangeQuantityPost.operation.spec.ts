/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './subscriptionChangeQuantityPost.operation';

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

describe('subscriptionChangeQuantityPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, id and quantity parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Office Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Subscription ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Quantity',
				name: 'quantity',
				type: 'number',
				default: 1,
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

		it('should change the quantity via POST', async () => {
			const mockData = { id: 701, status: 'todo' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'csp2-12345';
					switch (param) {
						case 'serviceName':
							return 'csp2-12345';
						case 'id':
							return 1001;
						case 'quantity':
							return 20;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/saas/csp2/csp2-12345/subscription/1001/changeQuantity',
				{ quantity: 20 },
			);

			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'csp 2';
					switch (param) {
						case 'serviceName':
							return 'csp 2';
						default:
							return undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/saas/csp2/csp%202/subscription/undefined/changeQuantity',
				{},
			);
		});
	});
});
