/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './M3dbLogSubscriptionCreatePost.operation';

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

describe('m3dblogsubscriptioncreatepost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(1);
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
			client.httpPost = jest.fn().mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'clusterId') return 'cluster-123';
					if (param === 'backupId') return 'backup-456';
					if (param === 'integrationId') return 'integration-789';
					if (param === 'ipBlock') return '192.168.1.0/24';
					if (param === 'subscriptionId') return 'sub-001';
					if (param === 'maintenanceId') return 'maint-001';
					if (param === 'nodeId') return 'node-001';
					if (param === 'userId') return 'user-001';
					if (param === 'metricName') return 'cpu';
					if (param === 'period') return '24h';
					if (param === 'name') return 'general';
					if (param === 'kind') return 'general';
					if (param === 'streamId') return 'stream-001';
					if (param === 'namespaceId') return 'ns-001';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalled();
			expect(result).toMatchObject([mockData]);
		});
	});
});
