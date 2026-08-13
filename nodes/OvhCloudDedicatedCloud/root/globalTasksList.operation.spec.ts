/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './globalTasksList.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('globalTasksList.operation', () => {
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
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'datacenterId') return 1;
				if (param === 'endDate.from') return 'value';
				if (param === 'endDate.to') return 'value';
				if (param === 'executionDate.from') return 'value';
				if (param === 'executionDate.to') return 'value';
				if (param === 'filerId') return 1;
				if (param === 'hostId') return 1;
				if (param === 'lastModificationDate.from') return 'value';
				if (param === 'lastModificationDate.to') return 'value';
				if (param === 'name') return 'value';
				if (param === 'networkAccessId') return 1;
				if (param === 'orderId') return 1;
				if (param === 'parentTaskId') return 1;
				if (param === 'state') return ['canceled'];
				if (param === 'userId') return 1;
				if (param === 'vlanId') return 1;
				if (param === 'returnAll') return false;
				if (param === 'limit') return 1;
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpGet).toHaveBeenCalledWith('/dedicatedCloud/pcc-123-456-789/globalTasks', { datacenterId: 1, "endDate.from": 'value', "endDate.to": 'value', "executionDate.from": 'value', "executionDate.to": 'value', filerId: 1, hostId: 1, "lastModificationDate.from": 'value', "lastModificationDate.to": 'value', name: 'value', networkAccessId: 1, orderId: 1, parentTaskId: 1, state: ['canceled'], userId: 1, vlanId: 1 });
		});
	});
});
