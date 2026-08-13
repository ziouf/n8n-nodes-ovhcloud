/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './allDomListGet.operation';

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

describe('allDomListGet.operation', () => {
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
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should list AllDom services via GET', async () => {
			const mockData = ['alldom1234567', 'alldom7654321'];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/allDom');
			expect(result).toEqual([{ serviceName: 'alldom1234567' }, { serviceName: 'alldom7654321' }]);
		});

		it('should return empty array for empty data', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			const result = await execute.call(mockExecuteFunctions);
			expect(result).toEqual([]);
		});
	});
});
