/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './tasksGetTask.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('worklight tasksGetTask operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
		it('should have serviceName and taskId parameters', () => {
			const result = description({ show: {} });
			const names = result.map((p: any) => p.name);
			expect(names).toContain('serviceName');
			expect(names).toContain('taskId');
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
			const mockData = { id: 'task-1', status: 'completed' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (param === 'serviceName') {
						if (opts?.extractValue) return 'test-license';
						return 'test-license';
					}
					if (param === 'taskId') return 'task-123';
					return def ?? '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect((client.httpGet as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toEqual([mockData]);
		});
	});
});
