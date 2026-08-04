/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './vmRestorePointGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('vmRestorePointGet.operation', () => {
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

		it('should call the correct endpoint', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'datacenterId') return 1;
				if (param === 'restorePointId') return 1;
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'vmId') return 1;
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ id: 1 }, { id: 2 }]);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpGet).toHaveBeenCalledWith('/dedicatedCloud/pcc-123-456-789/datacenter/1/vm/1/backupJob/restorePoints/1');
		});
	});
});
