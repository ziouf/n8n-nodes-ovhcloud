/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './redirectUpdatePut.operation';

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

describe('redirectUpdatePut.operation', () => {
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

		it('should update a redirect via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ path: '/blog', url: 'https://new2.example.com/blog' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'path':
						return '/blog';
					case 'url':
						return 'https://new2.example.com/blog';
					case 'statusCode':
						return 302;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/redirect/example.com/%2Fblog', {
				url: 'https://new2.example.com/blog',
				statusCode: 302,
			});
			expect(result).toEqual([{ path: '/blog', url: 'https://new2.example.com/blog' }]);
		});
	});
});
