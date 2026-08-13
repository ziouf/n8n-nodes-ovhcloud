/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './taskDetailGet.operation';

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

describe('taskDetailGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and taskId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[1]).toMatchObject({
				displayName: 'Task ID',
				name: 'taskId',
				type: 'number',
				default: 0,
				required: true,
			});
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

		it('should get task properties via GET', async () => {
			const mockData = { taskId: 42, state: 'done' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'taskId':
							return 42;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/horizonView/service1/dedicatedHorizon/task/42');
			expect(result).toEqual([mockData]);
		});
	});
});
