/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './clusterListGet.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('clusterListGet operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-123' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpGet as jest.Mock).mockResolvedValue([mockData]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
			if (param === 'publicCloudProjectId') return 'test-publicCloudProjectId-value';
			return '';
		});

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalled();

			expect(client.httpGet).toHaveBeenCalledWith(
				'/cloud/project/test-publicCloudProjectId-value/database/m3aggregator',
			);
		});
	});
});
