/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './importCustomCertificateCreate.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('importCustomCertificateCreate.operation', () => {
	describe('description', () => {
		it('should return service name and certificate name parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Certificate Name',
				name: 'certName',
				type: 'string',
				default: '',
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

		it('should import custom certificate via POST with name in query string', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName' ? 'myservice.ovh' : param === 'certName' ? 'myCert' : undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/ssl/importCustomCertificate',
				{},
				{ name: 'myCert' },
			);
		});

		it('should work with service name from list mode', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'service-from-list.ovh'
					: param === 'certName'
						? 'otherCert'
						: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/service-from-list.ovh/ssl/importCustomCertificate',
				{},
				{ name: 'otherCert' },
			);
		});
	});
});
