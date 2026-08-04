/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './filerGlobalTaskResetTaskState.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('filerGlobalTaskResetTaskState.operation', () => {
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

		it('should POST to the correct endpoint with the reason body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'filerId') return 1;
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'taskId') return 2;
				if (param === 'reason') return 'restart needed';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 2 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPost).toHaveBeenCalledWith(
				'/dedicatedCloud/pcc-123-456-789/filer/1/task/2/resetTaskState',
				{ reason: 'restart needed' },
			);
		});
	});
});
