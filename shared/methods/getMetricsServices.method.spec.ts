/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMetricsServices } from './getMetricsServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getMetricsServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return metrics service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['metric-1', 'metric-2']);

		const result = await getMetricsServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/metrics', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'metric-1', value: 'metric-1' },
				{ name: 'metric-2', value: 'metric-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getMetricsServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/metrics', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
