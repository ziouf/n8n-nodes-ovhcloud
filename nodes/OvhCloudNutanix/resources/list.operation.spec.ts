/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './list.operation';

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

describe('list.operation', () => {
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

		it('should list nutanix services via GET', async () => {
			const mockData = ['id-1', 'id-2'];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/nutanix');
			expect(result).toEqual([{ serviceName: 'id-1' }, { serviceName: 'id-2' }]);
		});

		it('should return empty array for empty data', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			const result = await execute.call(mockExecuteFunctions);
			expect(result).toEqual([]);
		});
	});
});
