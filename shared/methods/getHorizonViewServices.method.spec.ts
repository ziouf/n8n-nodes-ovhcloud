/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHorizonViewServices } from './index';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

// Module-level singleton for this test file
const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getHorizonViewServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Horizon View service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['service1', 'service2']);

		const result = await getHorizonViewServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/horizonView', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'service1', value: 'service1' },
				{ name: 'service2', value: 'service2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getHorizonViewServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/horizonView', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
