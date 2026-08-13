/* eslint-disable @typescript-eslint/no-explicit-any */
import { getClusterHadoopServices } from './getClusterHadoopServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getClusterHadoopServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Hadoop cluster service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['cluster-1', 'cluster-2']);

		const result = await getClusterHadoopServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/cluster/hadoop', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'cluster-1', value: 'cluster-1' },
				{ name: 'cluster-2', value: 'cluster-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getClusterHadoopServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/cluster/hadoop', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
