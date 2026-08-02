/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './nodeRolePost.operation';

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

describe('nodeRolePost.operation', () => {
	describe('description', () => {
		it('should return serviceName, hostname and type parameters', () => {
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
				displayName: 'Hostname',
				name: 'hostname',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Role Type',
				name: 'type',
				type: 'options',
				default: 'name_node',
				required: true,
				options: [
					{ name: 'Cloudera Manager', value: 'cloudera_manager' },
					{ name: 'Data Node', value: 'data_node' },
					{ name: 'Elasticsearch Server', value: 'elasticsearch_server' },
					{ name: 'HBase Master', value: 'hbase_master' },
					{ name: 'HBase Region Server', value: 'hbase_region_server' },
					{ name: 'Hive Server 2', value: 'hive_server2' },
					{ name: 'Hue', value: 'hue' },
					{ name: 'Impala Daemon', value: 'impala_daemon' },
					{ name: 'Impala Server', value: 'impala_server' },
					{ name: 'Map Reduce History Server', value: 'map_reduce_history_server' },
					{ name: 'Name Node', value: 'name_node' },
					{ name: 'Oozie Server', value: 'oozie_server' },
					{ name: 'Open TSDB', value: 'open_tsdb' },
					{ name: 'Secondary Name Node', value: 'secondary_name_node' },
					{ name: 'Solr Server', value: 'solr_server' },
					{ name: 'Spark Master', value: 'spark_master' },
					{ name: 'Spark Worker', value: 'spark_worker' },
					{ name: 'Sqoop Server', value: 'sqoop_server' },
					{ name: 'Yarn Node Manager', value: 'yarn_node_manager' },
					{ name: 'Yarn Resource Manager', value: 'yarn_resource_manager' },
					{ name: 'Zoo Keeper', value: 'zoo_keeper' },
				],
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

		it('should add a role to a node via POST with type', async () => {
			const mockData = { taskId: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'hostname':
							return 'node-12345';
						case 'type':
							return 'data_node';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cluster/hadoop/cluster-12345/node/node-12345/role',
				{ type: 'data_node' },
			);
			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in serviceName and hostname', async () => {
			const mockData = { taskId: 67890 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster 1';
					switch (param) {
						case 'serviceName':
							return 'cluster 1';
						case 'hostname':
							return 'node 1';
						case 'type':
							return 'name_node';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cluster/hadoop/cluster%201/node/node%201/role',
				{ type: 'name_node' },
			);
		});
	});
});
