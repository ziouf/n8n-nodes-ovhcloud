/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './maintenanceApplyPost.operation';

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

describe('cassandra maintenanceApplyPost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({
				show: { publicCloudOperation: ['cassandraMaintenanceApplyPost'] },
			});
			expect(result).toHaveLength(3);
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
			const mockData = { status: 'applied' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'clusterId') return 'cluster-123';
				if (param === 'maintenanceId') return 'maint-456';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/cassandra/cluster-123/maintenance/maint-456/apply',
				{},
			);
			expect(result).toMatchObject([{ status: 'applied' }]);
		});
	});
});
