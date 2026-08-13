/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './backupFtpAccessDelete.operation';

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

describe('backupFtpAccessDelete.operation', () => {
	describe('description', () => {
		it('should return serviceName and ipBlock parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Dedicated Server Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'IP Block',
					name: 'ipBlock',
					type: 'string',
					default: '',
					required: true,
				}),
			);
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
		});

		it('should have correct placeholder for ipBlock', () => {
			const result = description({ show: {} });
			const ipBlockProp = result[1] as any;
			expect(ipBlockProp.placeholder).toBe('e.g. 123.45.678.0/24');
		});

		it('should have correct placeholder for service name', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			const nameMode = serviceNameProp.modes.find((m: any) => m.name === 'name');
			expect(nameMode.placeholder).toBe('ns123456.ip-123-45-678.eu');
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

		it('should delete IP ACL rule via DELETE', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'ns123456.ip-123-45-678.eu';
					case 'ipBlock':
						return '192.168.1.0/24';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP/access/delete?ipBlock=192.168.1.0%2F24',
			);
			expect(result).toMatchObject([{ serviceName: 'ns123456.ip-123-45-678.eu' }]);
		});

		it('should encode special characters in ipBlock query param', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'ipBlock':
						return '10.0.0.0/8';
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/dedicated/server/srv.example.com/features/backupFTP/access/delete?ipBlock=10.0.0.0%2F8',
			);
		});

		it('should handle serviceName from list mode with extractValue', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'ns123456.ip-123-45-678.eu';
					switch (param) {
						case 'serviceName':
							return '';
						case 'ipBlock':
							return '10.0.0.0/24';
						default:
							return def ?? '';
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP/access/delete?ipBlock=10.0.0.0%2F24',
			);
		});

		it('should return success flag in result', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'ipBlock':
						return '172.16.0.0/12';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(result[0]).toMatchObject({ success: true });
		});
	});
});
