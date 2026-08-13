/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './biosSgxConfigurePost.operation';

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

describe('biosSgxConfigurePost.operation', () => {
	describe('description', () => {
		it('should return serviceName, prmrr and status parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Dedicated Server Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'PRMRR Size',
					name: 'prmrr',
					type: 'options',
					default: 0, // eslint-disable-line n8n-nodes-base/node-param-default-wrong-for-options
				}),
			);
			expect(result[2]).toEqual(
				expect.objectContaining({
					displayName: 'SGX Status',
					name: 'status',
					type: 'options',
					default: 'enabled', // eslint-disable-line n8n-nodes-base/node-param-default-wrong-for-options
				}),
			);
		});

		it('should have correct PRMRR options (5 values)', () => {
			const result = description({ show: {} });
			const prmrrProp = result[1] as any;
			expect(prmrrProp.options).toHaveLength(5);
			expect(prmrrProp.options.map((o: any) => o.value)).toEqual([0, 1, 2, 4, 8]);
		});

		it('should have correct SGX status options', () => {
			const result = description({ show: {} });
			const statusProp = result[2] as any;
			expect(statusProp.options).toHaveLength(2);
			expect(statusProp.options.map((o: any) => o.value)).toEqual(['enabled', 'disabled']);
		});

		it('should have list and name modes for service locator', () => {
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

		it('should configure BIOS SGX via POST with default values', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'ns123456.ip-123-45-678.eu';
					case 'prmrr':
						return 0;
					case 'status':
						return 'disabled';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/biosSettings/sgx/configure',
				{ prmrr: 0, status: 'disabled' },
			);
			expect(result).toMatchObject([
				{ serviceName: 'ns123456.ip-123-45-678.eu', prmrr: 0, status: 'disabled' },
			]);
		});

		it('should configure BIOS SGX with enabled status and PRMRR=4MB', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'prmrr':
						return 4;
					case 'status':
						return 'enabled';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/srv.example.com/biosSettings/sgx/configure',
				{ prmrr: 4, status: 'enabled' },
			);
			expect(result).toMatchObject([
				{ serviceName: 'srv.example.com', prmrr: 4, status: 'enabled' },
			]);
		});

		it('should configure BIOS SGX with PRMRR=8MB and disabled status', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'prmrr':
						return 8;
					case 'status':
						return 'disabled';
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/srv.example.com/biosSettings/sgx/configure',
				{ prmrr: 8, status: 'disabled' },
			);
		});

		it('should handle serviceName from list mode (extractValue)', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'ns123456.ip-123-45-678.eu';
					switch (param) {
						case 'serviceName':
							return '';
						case 'prmrr':
							return 0;
						case 'status':
							return 'disabled';
						default:
							return def ?? '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/biosSettings/sgx/configure',
				{ prmrr: 0, status: 'disabled' },
			);
			expect(result).toMatchObject([{ serviceName: 'ns123456.ip-123-45-678.eu' }]);
		});
	});
});
