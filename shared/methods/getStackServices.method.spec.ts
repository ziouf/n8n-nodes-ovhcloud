/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStackServices } from './getStackServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getStackServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return stack service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['stack-1', 'stack-2']);

		const result = await getStackServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/stack/mis', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'stack-1', value: 'stack-1' },
				{ name: 'stack-2', value: 'stack-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getStackServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/stack/mis', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
