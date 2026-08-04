/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './getGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('sslService/getGet.operation', () => {
	describe('description', () => {
		it('should return service name and certificate name parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Certificate Name',
				name: 'certificateName',
				type: 'string',
				default: '',
				required: true,
			});
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
			};
		});

		it('should get SSL certificate details via GET', async () => {
			const mockData = { name: 'cert-123' };
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'certificateName') return 'cert-123';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);

			expect(ApiClient).toHaveBeenCalled();
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/ssl/cert-123');
			expect(result).toMatchObject([mockData]);
		});
	});
});
