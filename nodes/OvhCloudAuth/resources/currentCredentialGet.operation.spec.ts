/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './currentCredentialGet.operation';

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

describe('currentCredentialGet.operation', () => {
	describe('description', () => {
		it('should return no parameters', () => {
			const result = description();
			expect(result).toHaveLength(0);
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

		it('should get current credential details via GET', async () => {
			const mockData = {
				credentialId: 1234,
				applicationId: 5678,
				status: 'validated',
				rules: [{ method: 'GET', path: '/me' }],
			};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/auth/currentCredential');
			expect(result).toEqual([mockData]);
		});
	});
});
