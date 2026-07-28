/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './contactUpdatePut.operation';

// Mock ApiClient
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('contactUpdatePut.operation', () => {
	describe('description', () => {
		it('should return ticketId, firstName and lastName parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(3);
			expect(result[0]).toEqual(
				expect.objectContaining({
					displayName: 'Ticket ID',
					name: 'ticketId',
					type: 'resourceLocator',
					default: { mode: 'list', value: '' },
					required: true,
				}),
			);
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'First Name',
					name: 'firstName',
					type: 'string',
					default: '',
				}),
			);
			expect(result[2]).toEqual(
				expect.objectContaining({
					displayName: 'Last Name',
					name: 'lastName',
					type: 'string',
					default: '',
				}),
			);
		});

		it('should include list and id modes for ticketId', () => {
			const result = description({ show: {} });
			const ticketIdParam = result[0] as any;

			expect(ticketIdParam.modes).toHaveLength(2);
			expect(ticketIdParam.modes[0]).toEqual(
				expect.objectContaining({ name: 'list', type: 'list' }),
			);
			expect(ticketIdParam.modes[1]).toEqual(
				expect.objectContaining({ name: 'id', type: 'string' }),
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

		it('should update contact of a support ticket', async () => {
			const mockData = { success: true };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ticketId':
						return '123456';
					case 'firstName':
						return 'John';
					case 'lastName':
						return 'Doe';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/supportTicket/123456/contact/update', {
				firstName: 'John',
				lastName: 'Doe',
			});
			expect(result).toEqual([mockData]);
		});

		it('should update contact with only firstName (skip empty lastName)', async () => {
			const mockData = { success: true };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ticketId':
						return '123456';
					case 'firstName':
						return 'Jane';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/supportTicket/123456/contact/update', {
				firstName: 'Jane',
				lastName: '',
			});
			expect(result).toEqual([mockData]);
		});
	});
});
