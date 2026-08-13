/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosUpdatePut.operation';

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

describe('serviceInfosUpdatePut.operation', () => {
	describe('description', () => {
		it('should return serviceName and contact parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				displayName: 'VIP Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
								required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Admin Contact',
				name: 'contactAdmin',
				type: 'string',
				default: '',
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

		it('should update VIP service information via PUT with contacts', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'vip1';
					switch (param) {
						case 'serviceName':
							return 'vip1';
						case 'contactAdmin':
							return 'admin-ovh';
						case 'contactBilling':
							return 'billing-ovh';
						case 'contactTech':
							return 'tech-ovh';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/vip/vip1/serviceInfos', {
				contactAdmin: 'admin-ovh',
				contactBilling: 'billing-ovh',
				contactTech: 'tech-ovh',
			});
			expect(result).toEqual([{ serviceName: 'vip1', success: true }]);
		});

		it('should update VIP service information via PUT with empty body when no contact given', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'vip1';
					switch (param) {
						case 'serviceName':
							return 'vip1';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/vip/vip1/serviceInfos', {});
		});
	});
});
