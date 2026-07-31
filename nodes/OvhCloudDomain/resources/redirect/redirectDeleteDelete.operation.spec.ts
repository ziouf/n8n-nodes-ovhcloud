/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './redirectDeleteDelete.operation';

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

describe('redirectDeleteDelete.operation', () => {
	describe('description', () => {
		it('should return domainName and path parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
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

		it('should delete a redirect via DELETE', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'path':
						return '/blog';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/domain/redirect/example.com/%2Fblog');
			expect(result).toEqual([{ path: '/blog', success: true }]);
		});
	});
});
