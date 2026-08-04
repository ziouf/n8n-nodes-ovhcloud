/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainOptionDeleteDelete.operation';

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

describe('hosting cdnDomainOptionDeleteDelete operation', () => {
	describe('description', () => {
		it('should return serviceName, domain and optionName parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[2]).toMatchObject({
				displayName: 'Option Name',
				name: 'optionName',
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

		it('should DELETE the CDN domain option', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'myservice.ovh';
					case 'domain':
						return 'www.example.com';
					case 'optionName':
						return 'cache';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/hosting/web/cdn/myservice.ovh/domain/www.example.com/option/cache',
			);
			expect(result).toHaveLength(1);
		});
	});
});
