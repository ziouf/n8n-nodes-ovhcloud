/* eslint-disable @typescript-eslint/no-explicit-any */
import { getFreefaxServices } from './index';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getFreefaxServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Freefax service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['freefax-1', 'freefax-2']);

		const result = await getFreefaxServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/freefax', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'freefax-1', value: 'freefax-1' },
				{ name: 'freefax-2', value: 'freefax-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockClear().mockResolvedValue([]);

		const result = await getFreefaxServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/freefax', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
