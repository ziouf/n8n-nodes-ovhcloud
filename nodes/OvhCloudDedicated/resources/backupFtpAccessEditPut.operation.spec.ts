/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './backupFtpAccessEditPut.operation';

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

describe('backupFtpAccessEditPut.operation', () => {
	describe('description', () => {
		it('should return all 5 parameters (serviceName, ipBlock, ftp, cifs, nfs)', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({ name: 'serviceName', type: 'resourceLocator' });
			expect(result[1]).toMatchObject({ name: 'ipBlock', type: 'string' });
			expect(result[2]).toMatchObject({ name: 'ftp', type: 'boolean', default: false });
			expect(result[3]).toMatchObject({
				name: 'cifs',
				type: 'boolean',
				default: false,
				required: true,
			});
			expect(result[4]).toMatchObject({ name: 'nfs', type: 'boolean', default: false });
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

		it('should mark cifs as required', () => {
			const result = description({ show: {} });
			const cifsProp = result[3] as any;
			expect(cifsProp.required).toBe(true);
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

		it('should edit IP ACL rule via PUT with all protocols', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'ns123456.ip-123-45-678.eu';
					case 'ipBlock':
						return '192.168.1.0/24';
					case 'ftp':
						return true;
					case 'cifs':
						return false;
					case 'nfs':
						return true;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP/access/edit?ipBlock=192.168.1.0%2F24',
				{ ftp: true, cifs: false, nfs: true },
			);
			expect(result).toMatchObject([{ serviceName: 'ns123456.ip-123-45-678.eu' }]);
		});

		it('should edit IP ACL rule with only CIFS enabled (required)', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'ipBlock':
						return '10.0.0.0/24';
					case 'ftp':
						return false;
					case 'cifs':
						return true;
					case 'nfs':
						return false;
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/dedicated/server/srv.example.com/features/backupFTP/access/edit?ipBlock=10.0.0.0%2F24',
				{ ftp: false, cifs: true, nfs: false },
			);
		});

		it('should handle serviceName from list mode with extractValue', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'ns123456.ip-123-45-678.eu';
					switch (param) {
						case 'serviceName':
							return '';
						case 'ipBlock':
							return '10.0.0.0/24';
						case 'ftp':
							return false;
						case 'cifs':
							return true;
						case 'nfs':
							return false;
						default:
							return def ?? '';
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP/access/edit?ipBlock=10.0.0.0%2F24',
				{ ftp: false, cifs: true, nfs: false },
			);
		});

		it('should return success flag in result', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'ipBlock':
						return '172.16.0.0/12';
					case 'ftp':
						return true;
					case 'cifs':
						return false;
					case 'nfs':
						return false;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(result[0]).toMatchObject({ success: true });
		});

		it('should encode special characters in ipBlock query param', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'ipBlock':
						return '10.0.0.0/8';
					case 'ftp':
						return false;
					case 'cifs':
						return true;
					case 'nfs':
						return false;
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/dedicated/server/srv.example.com/features/backupFTP/access/edit?ipBlock=10.0.0.0%2F8',
				{ ftp: false, cifs: true, nfs: false },
			);
		});
	});
});
