/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './filerGlobalTaskList.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('filerGlobalTaskList.operation', () => {
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

		it('should list tasks via GET and respect limit', async () => {
			const mockData = [1, 2, 3];
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'filerId') return 1;
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'name') return '';
				if (param === 'state') return '';
				if (param === 'returnAll') return false;
				if (param === 'limit') return 1;
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicatedCloud/pcc-123-456-789/filer/1/task',
				{},
			);
			expect(result).toMatchObject([1]);
		});
	});
});
