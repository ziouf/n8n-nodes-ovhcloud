/* eslint-disable @typescript-eslint/no-explicit-any */
import { getVeeamCloudConnectServices } from './getVeeamCloudConnectServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getVeeamCloudConnectServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Veeam Cloud Connect service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['veeam-1', 'veeam-2']);

		const result = await getVeeamCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/veeamCloudConnect', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'veeam-1', value: 'veeam-1' },
				{ name: 'veeam-2', value: 'veeam-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getVeeamCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/veeamCloudConnect', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
