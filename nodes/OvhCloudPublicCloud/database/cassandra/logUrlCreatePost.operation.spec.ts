/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './logUrlCreatePost.operation';

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

describe('cassandra logUrlCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: { publicCloudOperation: ['cassandraLogUrlCreatePost'] } });
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
			const mockData = { url: 'http://logs.example.com' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'clusterId') return 'cluster-123';
				if (param === 'url') return 'http://logs.example.com';
				if (param === 'kind') return 'general';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/cassandra/cluster-123/log/url',
				{ url: 'http://logs.example.com', kind: 'general' },
			);
			expect(result).toMatchObject([{ url: 'http://logs.example.com' }]);
		});
	});
});
