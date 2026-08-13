/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './score.operation';

// Mock ApiClient
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('score.operation', () => {
	describe('description', () => {
		it('should return ticketId and score parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(3);
			expect(result[0]).toEqual(
				expect.objectContaining({
					displayName: 'Ticket ID',
					default: { mode: 'list', value: '' },
					name: 'ticketId',
					required: true,
					type: 'resourceLocator',
				}),
			);
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'Score',
					default: 0,
					name: 'score',
					type: 'number',
				}),
			);
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

		it('should score a support ticket', async () => {
			const mockData = { success: true };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ticketId':
						return '123456';
					case 'score':
						return 5;
					case 'comment':
						return '';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/support/tickets/123456/score', {
				score: 5,
				comment: '',
			});
			expect(result).toEqual([mockData]);
		});

		it('should score with default value when no explicit score', async () => {
			const mockData = { success: true };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ticketId':
						return '123456';
					case 'score':
						return 5;
					case 'comment':
						return '';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/support/tickets/123456/score', {
				score: 5,
				comment: '',
			});
			expect(result).toEqual([mockData]);
		});
	});
});
