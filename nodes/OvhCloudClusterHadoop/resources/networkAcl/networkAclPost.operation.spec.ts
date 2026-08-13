/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './networkAclPost.operation';

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

describe('networkAclPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, block and description parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Cluster Hadoop Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'IP Block',
				name: 'block',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
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

		it('should add a network ACL via POST with block and description', async () => {
			const mockData = { block: '192.168.1.0/24', state: 'enabled' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'block':
							return '192.168.1.0/24';
						case 'description':
							return 'office access';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/networkAcl', {
				block: '192.168.1.0/24',
				description: 'office access',
			});
			expect(result).toEqual([mockData]);
		});

		it('should send an empty body when only serviceName is provided', async () => {
			const mockData = { block: '10.0.0.0/8' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/networkAcl', {});
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster 1';
					switch (param) {
						case 'serviceName':
							return 'cluster 1';
						case 'block':
							return '192.168.1.0/24';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/cluster/hadoop/cluster%201/networkAcl', {
				block: '192.168.1.0/24',
			});
		});
	});
});
