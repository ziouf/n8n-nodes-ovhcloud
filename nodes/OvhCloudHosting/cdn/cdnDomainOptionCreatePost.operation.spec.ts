/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainOptionCreatePost.operation';

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

describe('hosting cdnDomainOptionCreatePost operation', () => {
	describe('description', () => {
		it('should return serviceName, domain, optionName, enabled and config parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Option Name',
				name: 'optionName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				required: true,
			});
			expect(result[4]).toMatchObject({
				displayName: 'Config',
				name: 'config',
				type: 'json',
				default: '{}',
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

		it('should POST the CDN domain option endpoint with body', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ name: 'cache', enabled: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					switch (param) {
						case 'serviceName':
							return 'myservice.ovh';
						case 'domain':
							return 'www.example.com';
						case 'optionName':
							return 'cache';
						case 'enabled':
							return true;
						case 'config':
							return '{"ttl": 3600}';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com/option',
				{ enabled: true, name: 'cache', config: { ttl: 3600 } },
			);
			expect(result[0]).toMatchObject({ name: 'cache', enabled: true });
		});

		it('should omit config from body when JSON is invalid', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					switch (param) {
						case 'serviceName':
							return 'myservice.ovh';
						case 'domain':
							return 'www.example.com';
						case 'optionName':
							return 'cache';
						case 'enabled':
							return true;
						case 'config':
							return 'not-json';
						default:
							return '';
					}
				},
			);

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com/option',
				{ enabled: true, name: 'cache' },
			);
		});
	});
});
