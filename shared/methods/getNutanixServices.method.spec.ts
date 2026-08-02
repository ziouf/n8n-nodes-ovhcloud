/* eslint-disable @typescript-eslint/no-explicit-any */
import { getNutanixServices } from './getNutanixServices.method';

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

describe('getNutanixServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return nutanix service names as name-value pairs', async () => {
		const mockData = ['nutanix-12345', 'nutanix-12345-2'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getNutanixServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/nutanix');
		expect(result).toEqual({
			results: [
				{ name: 'nutanix-12345', value: 'nutanix-12345' },
				{ name: 'nutanix-12345-2', value: 'nutanix-12345-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getNutanixServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/nutanix');
		expect(result).toEqual({ results: [] });
	});
});
