/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOverTheBoxServices } from './getOverTheBoxServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getOverTheBoxServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return OTB service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['otb-1', 'otb-2']);

		const result = await getOverTheBoxServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/overTheBox', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'otb-1', value: 'otb-1' },
				{ name: 'otb-2', value: 'otb-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getOverTheBoxServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/overTheBox', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
