/* eslint-disable @typescript-eslint/no-explicit-any */
import { getXdslServices } from './getXdslServices.method';

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

describe('getXdslServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Xdsl service names as name-value pairs', async () => {
		const mockData = ['xdsl-12345', 'xdsl-12345-2'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getXdslServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/xdsl');
		expect(result).toEqual({
			results: [
				{ name: 'xdsl-12345', value: 'xdsl-12345' },
				{ name: 'xdsl-12345-2', value: 'xdsl-12345-2' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getXdslServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/xdsl');
		expect(result).toEqual({ results: [] });
	});
});