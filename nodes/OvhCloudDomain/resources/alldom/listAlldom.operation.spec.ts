/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listAlldom.operation';

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

describe('listAlldom.operation', () => {
	describe('description', () => {
		it('should return parameters array with no params for list operation', () => {
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

		it('should list all alldom via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['alldom1.ovh.net']);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/alldom');
		});

		it('should return mapped results', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['alldom1.ovh.net', 'alldom2.ovh.net']);

			await execute.call(mockExecuteFunctions);
			expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith([
				{ name: 'alldom1.ovh.net' },
				{ name: 'alldom2.ovh.net' },
			]);
		});
	});
});
