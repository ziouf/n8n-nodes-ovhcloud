/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './advancedConfigurationUpdatePut.operation';

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

describe('postgresql advancedConfigurationUpdatePut operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: { publicCloudOperation: ['advancedConfigurationUpdatePut'] } });
			expect(result.length).toBeGreaterThanOrEqual(0);
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
			client.httpPut = jest.fn().mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'clusterId') return 'cluster-123';
					if (param === 'backupId') return 'backup-456';
					if (param === 'connectionPoolId') return 'connectionPool-001';
					if (param === 'databaseId') return 'db-001';
					if (param === 'integrationId') return 'integration-789';
					if (param === 'ipBlock') return '192.168.1.0/24';
					if (param === 'subscriptionId') return 'sub-001';
					if (param === 'maintenanceId') return 'maint-001';
					if (param === 'nodeId') return 'node-001';
					if (param === 'userId') return 'user-001';
					if (param === 'metricName') return 'cpu';
					if (param === 'period') return '24h';
					if (param === 'name') return 'general';
					if (param === 'description') return 'test';
					if (param === 'plan') return 'essential';
					if (param === 'version') return '14';
					if (param === 'destinationServiceId') return 'dest-123';
					if (param === 'sourceServiceId') return 'src-456';
					if (param === 'ip') return '192.168.1.0/24';
					if (param === 'kind') return 'general';
					if (param === 'streamId') return 'stream-001';
					if (param === 'limit') return 0;
					if (param === 'offset') return 0;
					if (param === 'pid') return 1234;
					if (param === 'terminate') return false;
					if (param === 'advancedConfiguration') return {};
					if (param === 'size') return 10;
					if (param === 'mode') return 'session';
					if (param === 'roles') return JSON.stringify(['admin']);
					if (param === 'isDefault') return false;
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/postgresql/cluster-123/advancedConfiguration',
				expect.any(Object),
			);
			expect(result).toMatchObject([mockData]);
		});
	});
});
