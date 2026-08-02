/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWorkLightLicenses } from './getWorkLightLicenses.method';

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

describe('getWorkLightLicenses', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return WorkLight license service names as name-value pairs', async () => {
		const mockData = ['license-1', 'license-2'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getWorkLightLicenses.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/license/worklight');
		expect(result).toEqual({
			results: [
				{ name: 'license-1', value: 'license-1' },
				{ name: 'license-2', value: 'license-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getWorkLightLicenses.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/license/worklight');
		expect(result).toEqual({ results: [] });
	});
});
