/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOvhCloudConnectServices } from './getOvhCloudConnectServices.method';

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

describe('getOvhCloudConnectServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return OvhCloudConnect service names as name-value pairs', async () => {
		const mockData = ['ovhcloudconnect-12345', 'ovhcloudconnect-12345-2'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getOvhCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/ovhCloudConnect');
		expect(result).toEqual({
			results: [
				{ name: 'ovhcloudconnect-12345', value: 'ovhcloudconnect-12345' },
				{ name: 'ovhcloudconnect-12345-2', value: 'ovhcloudconnect-12345-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getOvhCloudConnectServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/ovhCloudConnect');
		expect(result).toEqual({ results: [] });
	});
});
