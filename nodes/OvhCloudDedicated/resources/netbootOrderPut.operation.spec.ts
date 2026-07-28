/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './netbootOrderPut.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('netbootOrderPut.operation', () => {
	describe('description', () => {
		it('should return service name and netboot order parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Dedicated Server Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Netboot Order',
				name: 'netbootOrder',
				type: 'options',
				default: '',
			});
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
		});

		it('should have correct netboot order options', () => {
			const result = description({ show: {} });
			const netbootOrderProp = result[1] as any;
			expect(netbootOrderProp.options).toHaveLength(4);
			expect(netbootOrderProp.options.map((o: any) => o.value)).toEqual([
				'',
				'internal',
				'network',
				'rescue',
			]);
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

		it('should update netboot order via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'ns123456.ip-123-45-678.eu';
						case 'netbootOrder':
							return 'network';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/netboot/order',
				{ bootMode: 'network' },
			);
			expect(result).toMatchObject([{ ok: true }]);
		});

		it('should call PUT with empty body when no netboot order provided', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'ns123456.ip-123-45-678.eu';
						case 'netbootOrder':
							return '';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/netboot/order',
				{},
			);
			expect(result).toMatchObject([{ ok: true }]);
		});
	});
});
