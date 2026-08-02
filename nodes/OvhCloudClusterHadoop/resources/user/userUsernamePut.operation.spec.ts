/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userUsernamePut.operation';

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

describe('userUsernamePut.operation', () => {
	describe('description', () => {
		it('should return serviceName, username and access parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'Cluster Hadoop Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Cloudera Manager Access',
				name: 'clouderaManager',
				type: 'boolean',
				default: false,
			});
			expect(result[3]).toMatchObject({
				displayName: 'HTTP Frontend Access',
				name: 'httpFrontend',
				type: 'boolean',
				default: false,
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should update a user via PUT with provided parameters', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'username':
							return 'user1';
						case 'clouderaManager':
							return true;
						case 'httpFrontend':
							return false;
						case 'hue':
							return true;
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/user/user1', {
				clouderaManager: true,
				httpFrontend: false,
				hue: true,
			});
			expect(result[0]).toMatchObject({
				serviceName: 'cluster-12345',
				username: 'user1',
				success: true,
			});
		});

		it('should send an empty body when no access parameters are provided', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'username':
							return 'user1';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/user/user1', {});
		});

		it('should encode special characters in serviceName and username', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster 1';
					switch (param) {
						case 'serviceName':
							return 'cluster 1';
						case 'username':
							return 'user 1';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cluster/hadoop/cluster%201/user/user%201', {});
		});
	});
});
