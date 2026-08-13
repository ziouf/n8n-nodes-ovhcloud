/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('userPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, username, password and access parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(6);
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
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Cloudera Manager Access',
				name: 'clouderaManager',
				type: 'boolean',
				default: false,
			});
			expect(result[4]).toMatchObject({
				displayName: 'HTTP Frontend Access',
				name: 'httpFrontend',
				type: 'boolean',
				default: false,
			});
			expect(result[5]).toMatchObject({
				displayName: 'Hue Access',
				name: 'hue',
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

		it('should add a user via POST with all parameters', async () => {
			const mockData = { username: 'user1' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'username':
							return 'user1';
						case 'password':
							return 'secret123';
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
			expect(client.httpPost).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/user', {
				clouderaManager: true,
				httpFrontend: false,
				hue: true,
				password: 'secret123',
				username: 'user1',
			});
			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in serviceName and username', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster 1';
					switch (param) {
						case 'serviceName':
							return 'cluster 1';
						case 'username':
							return 'user 1';
						case 'password':
							return 'secret123';
						case 'clouderaManager':
							return false;
						case 'httpFrontend':
							return false;
						case 'hue':
							return false;
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/cluster/hadoop/cluster%201/user', {
				clouderaManager: false,
				httpFrontend: false,
				hue: false,
				password: 'secret123',
				username: 'user 1',
			});
		});
	});
});
