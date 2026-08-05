/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './clusterCreatePost.operation';

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

describe('cassandra clusterCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({
				show: { publicCloudOperation: ['cassandraClusterCreatePost'] },
			});
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
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'region') return 'GRA6-1';
				if (param === 'flavorName') return 'b2-7';
				if (param === 'version') return '3.11';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/cassandra',
				{ region: 'GRA6-1', flavorName: 'b2-7', version: '3.11' },
			);
			expect(result).toMatchObject([{ id: 'test-123' }]);
		});
	});
});
