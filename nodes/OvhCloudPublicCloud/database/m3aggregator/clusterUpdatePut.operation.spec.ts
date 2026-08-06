/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './clusterUpdatePut.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('clusterUpdatePut operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
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
			(client.httpPut as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
			if (param === 'publicCloudProjectId') return 'test-publicCloudProjectId-value';
			if (param === 'clusterId') return 'test-clusterId-value';
			if (param === 'description') return 'test-description-value';
			if (param === 'plan') return 'test-plan-value';
			return '';
		});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalled();

			expect(client.httpPut).toHaveBeenCalledWith(
				'/cloud/project/test-publicCloudProjectId-value/database/m3aggregator/test-clusterId-value',
				expect.any(Object)
			);
		});
	});
});
