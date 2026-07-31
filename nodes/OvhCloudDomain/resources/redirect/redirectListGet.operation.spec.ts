/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './redirectListGet.operation';

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

describe('redirectListGet.operation', () => {
	describe('description', () => {
		it('should return domainName parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
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

		it('should list redirects via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ path: '/blog', url: 'https://new.example.com/blog' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'domainName') return 'example.com';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/redirect/example.com');
			expect(result).toEqual([{ path: '/blog', url: 'https://new.example.com/blog' }]);
		});
	});
});
