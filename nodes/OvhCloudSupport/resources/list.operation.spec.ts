/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './list.operation';

// Mock ApiClient with mutable httpGet for per-test control
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => ({
			...mockHttpClient,
		})),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('list.operation', () => {
	describe('description', () => {
		it('should return empty array (no additional params for list)', () => {
			const result = description();

			expect(result).toEqual([]);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: {
					returnJsonArray: jest.fn((data: any) => data),
				},
			};
		});

		it('should list all support tickets', async () => {
			const mockData = [123456, 789012, 345678];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets');
			expect(result).toEqual(mockData);
		});

		it('should return empty array when no tickets', async () => {
			const mockData: number[] = [];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets');
			expect(result).toEqual([]);
		});
	});
});
