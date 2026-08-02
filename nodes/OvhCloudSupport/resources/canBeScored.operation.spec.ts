/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './canBeScored.operation';

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

describe('canBeScored.operation', () => {
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
					required: true,
				}),
			);
		});

		it('should include list and id modes for ticketId', () => {
			const result = description({ show: {} });
			const ticketIdParam = result[0] as any;

			expect(ticketIdParam.modes).toHaveLength(2);
			expect(ticketIdParam.modes.map((m: any) => m.name)).toEqual(['list', 'id']);
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

		it('should check whether a ticket can be scored', async () => {
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue(true);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/support/tickets/123456/canBeScored');
			expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith([true]);
			expect(result).toEqual([true]);
		});

		it('should return false when the ticket cannot be scored', async () => {
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue(false);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/support/tickets/123456/canBeScored');
			expect(result).toEqual([false]);
		});
	});
});
