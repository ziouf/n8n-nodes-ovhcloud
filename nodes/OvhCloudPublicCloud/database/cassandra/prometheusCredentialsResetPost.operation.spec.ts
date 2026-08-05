/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './prometheusCredentialsResetPost.operation';

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

describe('cassandra prometheusCredentialsResetPost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({
				show: { publicCloudOperation: ['cassandraPrometheusCredentialsResetPost'] },
			});
			expect(result).toHaveLength(2);
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
			const mockData = { password: 'new-password' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'clusterId') return 'cluster-123';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/cassandra/cluster-123/prometheus/credentials/reset',
				{},
			);
			expect(result).toMatchObject([{ password: 'new-password' }]);
		});
	});
});
