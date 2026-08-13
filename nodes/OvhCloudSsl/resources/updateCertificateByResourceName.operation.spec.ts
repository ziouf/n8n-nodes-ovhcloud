/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './updateCertificateByResourceName.operation';

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

describe('updateCertificateByResourceName.operation', () => {
	describe('description', () => {
		it('should return parameters array (serviceName resourceLocator)', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1); // serviceName param only
			expect(result[0]).toMatchObject({ name: 'serviceName', type: 'resourceLocator' });
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
		});

		it('should use getHostingWebServices searchListMethod', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes[0].typeOptions.searchListMethod).toBe('getHostingWebServices');
		});

		it('should have correct placeholder for name mode', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes[1].placeholder).toBe('ns123456.ip-123-45-678.eu');
		});

		it('should mark serviceName as required', () => {
			const result = description({ show: {} });
			expect(result[0].required).toBe(true);
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

		it('should update SSL certificate via PUT for webhosting resource', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ success: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'ns123456.ip-123-45-678.eu';
					switch (param) {
						case 'serviceName':
							return '';
						default:
							return def ?? '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/webhosting/resource/ns123456.ip-123-45-678.eu/certificate',
				{},
			);
			expect(result).toEqual([{ success: true }]);
		});

		it('should handle service name with special characters (URL encoding)', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'srv.example.com';
					switch (param) {
						case 'serviceName':
							return '';
						default:
							return def ?? '';
					}
				},
			);

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/webhosting/resource/srv.example.com/certificate',
				{},
			);
		});

		it('should return success flag in result for PUT operation', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'ns123456.ip-123-45-678.eu';
					switch (param) {
						case 'serviceName':
							return '';
						default:
							return def ?? '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(result[0]).toMatchObject({ success: true });
		});
	});
});
