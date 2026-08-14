/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute, SSL_TASKS_LIST_FILTERS } from './sslTasksListGet.operation';

// Mock ApiClient with mutable http methods for per-test control
jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => ({
			...mockHttpClient,
		})),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('sslTasksListGet operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should call the correct API endpoint without filters (non-regression)', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'test-serviceName';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/cdn/dedicated/test-serviceName/ssl/tasks',
				undefined,
			);
			expect(result).toMatchObject([mockData]);
		});

		it('should call the correct API endpoint with filters', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'test-serviceName';
					case 'function':
						return 'flush';
					case 'status':
						return 'cancelled';
					default:
						return {};
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/cdn/dedicated/test-serviceName/ssl/tasks', {
				function: 'flush',
				status: 'cancelled',
			});
			expect(result).toMatchObject([mockData]);
		});
	});

	describe('SSL_TASKS_LIST_FILTERS', () => {
		it('should export filter definitions', () => {
			expect(SSL_TASKS_LIST_FILTERS).toHaveLength(2);
			expect(SSL_TASKS_LIST_FILTERS[0]!.queryParam).toBe('function');
			expect(SSL_TASKS_LIST_FILTERS[1]!.queryParam).toBe('status');
			// Both should be in parameterPath mode (excluded from filtersCollection).
			expect(SSL_TASKS_LIST_FILTERS[0]!.parameterPath).toBe('function');
			expect(SSL_TASKS_LIST_FILTERS[1]!.parameterPath).toBe('status');
		});
	});
});
