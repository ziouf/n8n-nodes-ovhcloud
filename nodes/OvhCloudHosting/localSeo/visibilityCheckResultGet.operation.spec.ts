/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './visibilityCheckResultGet.operation';

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

describe('localSeo.visibilityCheckResultGet.operation', () => {
	describe('description', () => {
		it('should return id, token and directory parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Token',
				name: 'token',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Directory',
				name: 'directory',
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

		it('should GET the visibilityCheckResult endpoint with query params', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ directory: 'google' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					switch (param) {
						case 'id':
							return 42;
						case 'token':
							return 'abc123';
						case 'directory':
							return 'google';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/localSeo/visibilityCheckResult', {
				id: 42,
				token: 'abc123',
				directory: 'google',
			});
			expect(result[0]).toMatchObject({ '0': { directory: 'google' } });
		});

		it('should omit directory from query when not provided', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					if (param === 'id') return 1;
					if (param === 'token') return 'tok';
					return '';
				},
			);

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/localSeo/visibilityCheckResult', {
				id: 1,
				token: 'tok',
			});
		});
	});
});
