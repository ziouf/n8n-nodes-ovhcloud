/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './MaintenanceApplyPost.operation';

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

describe('opensearch MaintenanceApplyPost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({'show': { publicCloudOperation: ['MaintenanceApplyPost'] }});
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
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost = jest.fn().mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
							if (param === 'clusterId') return 'test-cluster-id';
				if (param === 'maintenanceId') return 'test-maintenance-id';
				if (param === 'serviceName') return 'test-service';
			},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalled();
			expect(result).toMatchObject([mockData]);
		});
	});
});
