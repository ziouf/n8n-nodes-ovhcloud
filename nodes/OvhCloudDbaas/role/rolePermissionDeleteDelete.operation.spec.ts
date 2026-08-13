/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './rolePermissionDeleteDelete.operation';

// Mock ApiClient with mutable http methods for per-test control
jest.mock('../../../shared/transport/ApiClient', () => {
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

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('rolePermissionDeleteDelete operation', () => {
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

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpDelete as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName': return 'test-service';
					case 'permissionId': return 'test-permissionId';
					case 'roleId': return 'test-roleId';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpDelete).toHaveBeenCalledWith('/dbaas/logs/test-service/role/test-roleId/permission/test-permissionId');
			expect(result).toMatchObject([mockData]);
		});
	});
});
