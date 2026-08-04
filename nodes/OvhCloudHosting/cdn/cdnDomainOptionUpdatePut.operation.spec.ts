/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainOptionUpdatePut.operation';

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

describe('hosting cdnDomainOptionUpdatePut operation', () => {
	describe('description', () => {
		it('should return serviceName, domain, optionName and optionValue parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
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
			expect(result[2]).toMatchObject({
				displayName: 'Option Name',
				name: 'optionName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Option Value',
				name: 'optionValue',
				type: 'string',
				default: '',
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

		it('should PUT the CDN domain option with the domain segment in the URL', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ option: 'phpVersion', value: '8.0' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'myservice.ovh';
					case 'domain':
						return 'www.example.com';
					case 'optionName':
						return 'phpVersion';
					case 'optionValue':
						return '8.0';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/hosting/web/cdn/myservice.ovh/domain/www.example.com/option/phpVersion',
				{ value: '8.0' },
			);
			expect(result[0]).toMatchObject({ option: 'phpVersion', value: '8.0' });
		});
	});
});
