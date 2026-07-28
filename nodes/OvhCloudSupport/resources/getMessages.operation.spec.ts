/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './getMessages.operation';

// Mock ApiClient
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('getMessages.operation', () => {
	describe('description', () => {
		it('should return ticketId parameter', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual(
				expect.objectContaining({
					displayName: 'Ticket ID',
					name: 'ticketId',
					type: 'resourceLocator',
					default: { mode: 'list', value: '' },
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

		it('should get messages for a ticket', async () => {
			const mockData = [
				{ messageId: 1, body: 'First message', from: 'customer' },
				{ messageId: 2, body: 'Response', from: 'support' },
			];
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/supportTicket/123456/messages');
			expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith(mockData);
			expect(result).toEqual(mockData);
		});

		it('should return empty array when no messages', async () => {
			const mockData: any[] = [];
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/supportTicket/123456/messages');
			expect(result).toEqual([]);
		});
	});
});
