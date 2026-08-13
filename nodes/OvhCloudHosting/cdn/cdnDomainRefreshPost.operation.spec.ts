/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainRefreshPost.operation';

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

describe('hosting cdnDomainRefreshPost operation', () => {
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

		it('should POST the CDN domain refresh endpoint', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 55, status: 'todo' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'domain') return 'www.example.com';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com/refresh',
			);
			expect(result[0]).toMatchObject({ id: 55, status: 'todo' });
		});
	});
});
