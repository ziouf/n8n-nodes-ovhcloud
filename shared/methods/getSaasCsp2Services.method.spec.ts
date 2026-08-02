/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSaasCsp2Services } from './getSaasCsp2Services.method';

// Mock ApiClient - no parameter needed since it's not used in the mock
jest.mock('../transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
	};
});

import { ApiClient } from '../transport/ApiClient';

describe('getSaasCsp2Services', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return saas csp2 service names as name-value pairs', async () => {
		const mockData = ['csp2-12345', 'csp2-12346'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getSaasCsp2Services.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/saas/csp2');
		expect(result).toEqual({
			results: [
				{ name: 'csp2-12345', value: 'csp2-12345' },
				{ name: 'csp2-12346', value: 'csp2-12346' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getSaasCsp2Services.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/saas/csp2');
		expect(result).toEqual({ results: [] });
	});
});
