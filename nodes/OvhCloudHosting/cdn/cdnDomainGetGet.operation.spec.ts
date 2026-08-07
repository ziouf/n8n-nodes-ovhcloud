/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainGetGet.operation';

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

describe('hosting cdnDomainGetGet operation', () => {
	describe('description', () => {
		it('should return serviceName and domain parameters', () => {
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
				displayName: 'Domain',
				name: 'domain',
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
				getInputData: jest.fn(() => [{ json: {} }]),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should GET the CDN domain by name', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({ domain: 'www.example.com', status: 'on' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'domain') return 'www.example.com';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com',
			);
			expect(result[0]).toMatchObject({ domain: 'www.example.com', status: 'on' });
		});
	});
});
