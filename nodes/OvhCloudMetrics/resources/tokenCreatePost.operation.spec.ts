/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './tokenCreatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('tokenCreatePost.operation', () => {
	describe('description', () => {
		it('should return serviceName, permission, description and labels parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				displayName: 'Metrics Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Permission',
				name: 'permission',
				type: 'options',
				default: 'read',
				required: true,
				options: [
					{ name: 'Read', value: 'read' },
					{ name: 'Write', value: 'write' },
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

		it('should create a token via POST with all parameters', async () => {
			const mockData = { id: 'token-1234', access: 'secret' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics-12345';
					switch (param) {
						case 'serviceName':
							return 'metrics-12345';
						case 'permission':
							return 'read';
						case 'description':
							return 'New token';
						case 'labels':
							return '[{"key": "env", "value": "prod"}]';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/metrics/metrics-12345/token', {
				permission: 'read',
				description: 'New token',
				labels: [{ key: 'env', value: 'prod' }],
			});
			expect(result).toEqual([mockData]);
		});

		it('should create a token via POST with only required permission', async () => {
			const mockData = { id: 'token-1234' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics-12345';
					switch (param) {
						case 'serviceName':
							return 'metrics-12345';
						case 'permission':
							return 'write';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/metrics/metrics-12345/token', {
				permission: 'write',
			});
		});
	});
});
