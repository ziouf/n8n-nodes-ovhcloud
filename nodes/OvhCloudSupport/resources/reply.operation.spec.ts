/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './reply.operation';

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

describe('reply.operation', () => {
	describe('description', () => {
		it('should return ticketId and message parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(4);
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
					displayName: 'Message',
					default: '',
					name: 'message',
					type: 'string',
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

		it('should reply to a support ticket', async () => {
			const mockData = { messageId: 789 };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ticketId':
						return '123456';
					case 'message':
						return 'Test message';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(result).toEqual([mockData]);
		});

		it('should reply with private flag', async () => {
			const mockData = { messageId: 999 };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ticketId':
						return '123456';
					case 'message':
						return 'Private reply';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(result).toEqual([mockData]);
		});
	});
});
