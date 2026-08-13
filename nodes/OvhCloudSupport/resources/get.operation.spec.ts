/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './get.operation';

// Mock ApiClient
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation((fn: any) => {
			const client = new (jest.requireActual('../../../shared/transport/ApiClient').ApiClient)(fn);
			return { ...client, ...mockHttpClient };
		}),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('get.operation', () => {
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

		it('should fetch ticket by ID', async () => {
			const mockData = { id: 123456, subject: 'Test', status: 'OPEN' };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/support/tickets/123456');
			expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith([mockData]);
			expect(result).toEqual([mockData]);
		});

		it('should return empty array for no data', async () => {
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpGet as jest.Mock).mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(result).toEqual([{}]);
		});
	});
});
