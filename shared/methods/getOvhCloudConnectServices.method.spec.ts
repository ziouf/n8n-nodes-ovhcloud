/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOvhCloudConnectServices } from './getOvhCloudConnectServices.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getOvhCloudConnectServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return OVH Cloud Connect service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['cloud-connect-1', 'cloud-connect-2']);

		const result = await getOvhCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/ovhCloudConnect', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'cloud-connect-1', value: 'cloud-connect-1' },
				{ name: 'cloud-connect-2', value: 'cloud-connect-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getOvhCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/ovhCloudConnect', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
