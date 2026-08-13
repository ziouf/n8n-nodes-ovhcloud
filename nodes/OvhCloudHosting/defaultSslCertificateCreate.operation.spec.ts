/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './defaultSslCertificateCreate.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../shared/transport/ApiClient';

describe('defaultSslCertificateCreate.operation', () => {
	describe('description', () => {
		it('should return service name parameter only', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			expect(result[0].modes).toHaveLength(2);
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

		it('should create default SSL certificate via POST', async () => {
			const mockData = {};
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName' ? 'myservice.ovh' : undefined,
			);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/ssl/defaultSslCertificate',
				{},
			);
			expect(result).toMatchObject([mockData]);
		});

		it('should work with service name from list mode', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName' ? 'service-from-list.ovh' : undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/service-from-list.ovh/ssl/defaultSslCertificate',
				{},
			);
		});
	});
});
