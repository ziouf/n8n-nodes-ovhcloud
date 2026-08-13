/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSupportTicketServices } from './getSupportTicketServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getSupportTicketServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return ticket IDs as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue([123456, 789012, 345678]);

		await getSupportTicketServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/supportTicket', expect.any(Object));
	});

	it('should return empty array for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		await getSupportTicketServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/supportTicket', expect.any(Object));
	});
});
