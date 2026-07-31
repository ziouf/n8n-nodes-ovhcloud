/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './smsTaskListGet.operation';

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

describe('smsTaskListGet.operation', () => {
	describe('description', () => {
		it('should return serviceName parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
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

		it('should list SMS tasks via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ taskName: 'task-1', status: 'DONE' }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'sms123';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/sms/sms123/task');
			expect(result).toEqual([{ taskName: 'task-1', status: 'DONE' }]);
		});
	});
});
