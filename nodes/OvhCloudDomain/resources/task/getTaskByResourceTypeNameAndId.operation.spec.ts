/* eslint-disable @typescript-eslint/no-explicit-any */
import type { INodeProperties } from 'n8n-workflow';
import { description, execute } from './getTaskByResourceTypeNameAndId.operation';

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

describe('getTaskByResourceTypeNameAndId.operation', () => {
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

		it('should not have serviceName parameter for task detail', () => {
			const result = description({ show: {} }) as INodeProperties[];
			// Only resourceType is in the description - service name comes from other params
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

		it('should get task detail for specific domain type', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'resourceType') return 'name';
				if (key === 'serviceName') return { value: 'example.com' };
				if (key === 'taskId') return 'task-123';
				return {};
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/name/example.com/task/task-123');
		});

		it('should throw error when taskId is not provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'resourceType') return 'name';
				if (key === 'serviceName') return { value: 'example.com' };
				if (key === 'taskId') return '';
				return {};
			});

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'Task ID is required for task detail retrieval.',
			);
		});
	});
});
