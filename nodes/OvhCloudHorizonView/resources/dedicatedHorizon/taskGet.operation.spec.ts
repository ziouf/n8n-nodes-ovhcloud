/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './taskGet.operation';

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

describe('taskGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and state parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Horizon View Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'State',
				name: 'state',
				type: 'options',
				default: 'canceled',
				options: [
					{ name: 'Canceled', value: 'canceled' },
					{ name: 'Doing', value: 'doing' },
					{ name: 'Done', value: 'done' },
					{ name: 'Error', value: 'error' },
					{ name: 'Fixing', value: 'fixing' },
					{ name: 'To Cancel', value: 'toCancel' },
					{ name: 'To Create', value: 'toCreate' },
					{ name: 'To Do', value: 'todo' },
					{ name: 'Unknown', value: 'unknown' },
					{ name: 'Waiting For Childs', value: 'waitingForChilds' },
					{ name: 'Waiting To Do', value: 'waitingTodo' },
				],
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

		it('should list tasks via GET with state filter', async () => {
			const mockData = [42, 43];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'state':
							return 'doing';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/horizonView/service1/dedicatedHorizon/task', {
				state: 'doing',
			});
			expect(result).toEqual([{ taskId: 42 }, { taskId: 43 }]);
		});

		it('should list tasks via GET without state filter', async () => {
			const mockData = [42];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/horizonView/service1/dedicatedHorizon/task',
				{},
			);
			expect(result).toEqual([{ taskId: 42 }]);
		});
	});
});
