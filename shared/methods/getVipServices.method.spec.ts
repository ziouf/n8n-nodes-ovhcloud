/* eslint-disable @typescript-eslint/no-explicit-any */
import { getVipServices } from './getVipServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getVipServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return VIP service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['vip-1', 'vip-2']);

		const result = await getVipServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/vip', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'vip-1', value: 'vip-1' },
				{ name: 'vip-2', value: 'vip-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getVipServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/vip', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
