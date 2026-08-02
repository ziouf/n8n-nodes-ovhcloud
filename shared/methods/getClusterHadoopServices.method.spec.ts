/* eslint-disable @typescript-eslint/no-explicit-any */
import { getClusterHadoopServices } from './getClusterHadoopServices.method';

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

describe('getClusterHadoopServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Cluster Hadoop service names as name-value pairs', async () => {
		const mockData = ['cluster-12345', 'cluster-67890'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getClusterHadoopServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/cluster/hadoop');
		expect(result).toEqual({
			results: [
				{ name: 'cluster-12345', value: 'cluster-12345' },
				{ name: 'cluster-67890', value: 'cluster-67890' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getClusterHadoopServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/cluster/hadoop');
		expect(result).toEqual({ results: [] });
	});
});
