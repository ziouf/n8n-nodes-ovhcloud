/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './redirectCreatePost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('redirectCreatePost.operation', () => {
	describe('description', () => {
		it('should return domainName, path, url, statusCode parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
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

		it('should create a redirect via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'path':
						return '/blog';
					case 'url':
						return 'https://new.example.com/blog';
					case 'statusCode':
						return 301;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/domain/redirect/example.com', {
				path: '/blog',
				url: 'https://new.example.com/blog',
				statusCode: 301,
			});
			expect(result).toEqual([{ path: '/blog', success: true }]);
		});
	});
});
