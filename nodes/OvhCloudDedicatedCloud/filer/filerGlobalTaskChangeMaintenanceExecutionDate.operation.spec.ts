/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './filerGlobalTaskChangeMaintenanceExecutionDate.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('filerGlobalTaskChangeMaintenanceExecutionDate.operation', () => {
	describe('description', () => {
		it('should return the expected parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
			};
		});

		it('should POST to the correct endpoint with the executionDate body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'filerId') return 1;
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'taskId') return 2;
				if (param === 'executionDate') return '2024-01-01T00:00:00+01:00';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 2 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicatedCloud/pcc-123-456-789/filer/1/task/2/changeMaintenanceExecutionDate',
				{ executionDate: '2024-01-01T00:00:00+01:00' },
			);
		});
	});
});
