/* eslint-disable @typescript-eslint/no-explicit-any */
import { getVeeamCloudConnectServices } from './getVeeamCloudConnectServices.method';

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

describe('getVeeamCloudConnectServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return veeamCloudConnect service names as name-value pairs', async () => {
		const mockData = ['vcc-12345', 'vcc-12345-2'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getVeeamCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/veeamCloudConnect');
		expect(result).toEqual({
			results: [
				{ name: 'vcc-12345', value: 'vcc-12345' },
				{ name: 'vcc-12345-2', value: 'vcc-12345-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getVeeamCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/veeamCloudConnect');
		expect(result).toEqual({ results: [] });
	});
});
