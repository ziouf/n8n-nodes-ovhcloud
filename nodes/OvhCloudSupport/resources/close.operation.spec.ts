/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './close.operation';

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

describe('close.operation', () => {
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

		it('should close a support ticket', async () => {
			const mockData = { status: 'CLOSED' };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/support/tickets/123456/close');
			expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith([mockData]);
			expect(result).toEqual([mockData]);
		});
	});
});
