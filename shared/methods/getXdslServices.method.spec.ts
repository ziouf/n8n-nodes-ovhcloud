/* eslint-disable @typescript-eslint/no-explicit-any */
import { getXdslServices } from './index';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getXdslServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return xDSL service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['xdsl-1', 'xdsl-2']);

		const result = await getXdslServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/xdsl', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'xdsl-1', value: 'xdsl-1' },
				{ name: 'xdsl-2', value: 'xdsl-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getXdslServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/xdsl', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
