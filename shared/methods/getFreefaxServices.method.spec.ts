/* eslint-disable @typescript-eslint/no-explicit-any */
import { getFreefaxServices } from './getFreefaxServices.method';

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

describe('getFreefaxServices', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		mockLoadOptionsFunctions = {
			getParentNodeParameter: jest.fn(),
			getWorkflowStaticData: jest.fn(),
		};
	});

	it('should return Freefax service names as name-value pairs', async () => {
		const mockData = ['fr12345-ovh', 'fr67890-ovh'];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getFreefaxServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/freefax');
		expect(result).toEqual({
			results: [
				{ name: 'fr12345-ovh', value: 'fr12345-ovh' },
				{ name: 'fr67890-ovh', value: 'fr67890-ovh' },
			],
		});
	});

	it('should return empty results for empty data', async () => {
		const mockData: string[] = [];
		const mockClient = (ApiClient as any)();
		(mockClient.httpGet as jest.Mock).mockResolvedValue(mockData);

		const result = await getFreefaxServices.call(mockLoadOptionsFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/freefax');
		expect(result).toEqual({ results: [] });
	});
});
