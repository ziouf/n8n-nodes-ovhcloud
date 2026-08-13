/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listAllDomains.operation';

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

describe('listAllDomains.operation', () => {
	describe('description', () => {
		it('should return parameters array (empty for list operation)', () => {
			const result = description();
			expect(result).toHaveLength(0); // no params for list operation
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

		it('should list all SSL certificates via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['cert1.example.com']);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/ssl');
		});

		it('should map string array to name objects', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['cert1.example.com', 'cert2.example.com']);

			mockExecuteFunctions.helpers.returnJsonArray.mockReturnValue([
				{ name: 'cert1.example.com' },
				{ name: 'cert2.example.com' },
			]);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/ssl');
			expect(result).toEqual([{ name: 'cert1.example.com' }, { name: 'cert2.example.com' }]);
		});

		it('should handle empty SSL certificate list', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/ssl');
		});

		it('should handle special characters in certificate names', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['cert-with-dashes.example.com']);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/ssl');
		});
	});
});
