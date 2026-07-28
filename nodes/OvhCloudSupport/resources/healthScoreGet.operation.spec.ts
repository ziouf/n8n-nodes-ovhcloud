/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './healthScoreGet.operation';

// Mock ApiClient
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('healthScoreGet.operation', () => {
	describe('description', () => {
		it('should return no parameters (GET endpoint)', () => {
			const result = description();

			expect(result).toHaveLength(0);
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

		it('should get overall health score across all tickets', async () => {
			const mockData = { averageScore: 85, totalTickets: 10 };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/supportTicket/health/score/get');
			expect(result).toEqual([mockData]);
		});
	});
});
