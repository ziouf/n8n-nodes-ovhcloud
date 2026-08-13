/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWorkLightLicenses } from './getWorkLightLicenses.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getWorkLightLicenses', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Work Light license names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['license-1', 'license-2']);

		const result = await getWorkLightLicenses.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/license/worklight', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'license-1', value: 'license-1' },
				{ name: 'license-2', value: 'license-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getWorkLightLicenses.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/license/worklight', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
