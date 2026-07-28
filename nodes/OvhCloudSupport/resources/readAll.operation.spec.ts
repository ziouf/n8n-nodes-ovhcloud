/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './readAll.operation';

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

describe('readAll.operation', () => {
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

		it('should mark all messages as read', async () => {
			const mockData = { success: true };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/supportTicket/123456/messages', {
				method: 'readAll',
			});
			expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith([mockData]);
			expect(result).toEqual([mockData]);
		});
	});
});
