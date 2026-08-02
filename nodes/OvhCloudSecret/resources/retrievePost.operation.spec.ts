/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './retrievePost.operation';

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

describe('retrievePost.operation', () => {
	describe('description', () => {
		it('should return secretKey and secretType parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Secret Key',
				name: 'secretKey',
				type: 'string',
				default: '',
				required: true,
				typeOptions: { password: true },
			});
			expect(result[1]).toMatchObject({
				displayName: 'Secret Type',
				name: 'secretType',
				type: 'string',
				default: '',
				required: true,
				typeOptions: { password: true },
			});
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

		it('should retrieve a secret via POST', async () => {
			const mockData = {
				expiration: '2026-03-31T12:34:56.789Z',
				secret: 'the-secret-value',
			};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'secretKey':
						return 'sk-1234';
					case 'secretType':
						return 'email';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/secret/retrieve', {
				secretKey: 'sk-1234',
				secretType: 'email',
			});
			expect(result).toEqual([mockData]);
		});
	});
});
