/* eslint-disable @typescript-eslint/no-explicit-any */
import { getNutanixServices } from './index';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getNutanixServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Nutanix service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['nutanix-1', 'nutanix-2']);

		const result = await getNutanixServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/nutanix', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'nutanix-1', value: 'nutanix-1' },
				{ name: 'nutanix-2', value: 'nutanix-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getNutanixServices.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/nutanix', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
