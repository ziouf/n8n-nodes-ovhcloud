/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listTasksByResourceTypeAndName.operation';

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

describe('listTasksByResourceTypeAndName.operation', () => {
	describe('description', () => {
		it('should return parameters array with resourceType option', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0].name).toBe('resourceType');
			expect(result[0].type).toBe('options');
		});

		it('should have alldom and name options', () => {
			const result = description({ show: {} }) as any;
			const options = result[0].options || [];
			expect(options.some((o: any) => o.value === 'alldom')).toBe(true);
			expect(options.some((o: any) => o.value === 'name')).toBe(true);
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

		it('should list tasks for alldom type', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'resourceType') return 'alldom';
				return {};
			});
			// alldom list returns strings, tasks endpoint also returns strings or objects
			client.httpGet.mockResolvedValue(['task1', 'task2']);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalled();
		});

		it('should get domain name from input for specific domain type', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'resourceType') return 'name';
				if (key === 'serviceName') return { value: 'example.com' };
				return {};
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/name/example.com/task');
		});
	});
});
