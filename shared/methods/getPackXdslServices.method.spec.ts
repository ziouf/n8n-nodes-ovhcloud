/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPackXdslServices } from './getPackXdslServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getPackXdslServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return xDSL pack service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['pack-1', 'pack-2']);

		const result = await getPackXdslServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/pack/xdsl', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'pack-1', value: 'pack-1' },
				{ name: 'pack-2', value: 'pack-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getPackXdslServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/pack/xdsl', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
