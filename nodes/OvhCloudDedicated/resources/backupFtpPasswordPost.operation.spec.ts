/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './backupFtpPasswordPost.operation';

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

describe('backupFtpPasswordPost.operation', () => {
	describe('description', () => {
		it('should return serviceName and password parameters', () => {
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
					displayName: 'Password',
					name: 'password',
					type: 'string',
					default: '',
					required: true,
					typeOptions: { password: true },
				}),
			);
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
		});

		it('should have correct placeholder for service name', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
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

		it('should update backup FTP password via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'ns123456.ip-123-45-678.eu';
					case 'password':
						return 'MyN3wP@ss!';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP/password',
				{ password: 'MyN3wP@ss!' },
			);
			expect(result).toMatchObject([{ serviceName: 'ns123456.ip-123-45-678.eu' }]);
		});

		it('should handle empty password', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'password':
						return '';
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/srv.example.com/features/backupFTP/password',
				{ password: '' },
			);
		});

		it('should handle serviceName from list mode with extractValue', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'ns123456.ip-123-45-678.eu';
					switch (param) {
						case 'serviceName':
							return '';
						case 'password':
							return 'TestPass!';
						default:
							return def ?? '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP/password',
				{ password: 'TestPass!' },
			);
			expect(result).toMatchObject([{ serviceName: 'ns123456.ip-123-45-678.eu' }]);
		});

		it('should return success flag in result', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'srv.example.com';
					case 'password':
						return 'Pass123';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(result[0]).toMatchObject({ success: true });
		});
	});
});
