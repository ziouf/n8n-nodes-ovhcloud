/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSaasCsp2Services } from './getSaasCsp2Services.method';
import { createMockApiClient } from '../../tests/helpers/mockClient';
import { clearListSearchCache } from './listSearch';

const mockClient = createMockApiClient();

jest.mock('../transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getSaasCsp2Services', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		clearListSearchCache();
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return saas csp2 service names as name-value pairs', async () => {
		mockClient.paginate.mockResolvedValue(['csp2-12345', 'csp2-12346']);

		const result = await getSaasCsp2Services.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/saas/csp2', expect.any(Object));
		expect(result).toEqual({
			results: [
				{ name: 'csp2-12345', value: 'csp2-12345' },
				{ name: 'csp2-12346', value: 'csp2-12346' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		mockClient.paginate.mockResolvedValue([]);

		const result = await getSaasCsp2Services.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/saas/csp2', expect.any(Object));
		expect(result).toEqual({ results: [] });
	});
});
