/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceRestartPost.operation';

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

describe('serviceRestartPost.operation', () => {
	describe('description', () => {
		it('should return serviceName and service parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Cluster Hadoop Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Service',
				name: 'service',
				type: 'options',
				default: 'HDFS',
				required: true,
				options: [
					{ name: 'HBase', value: 'HBase' },
					{ name: 'HDFS', value: 'HDFS' },
					{ name: 'Hive', value: 'Hive' },
					{ name: 'HUE', value: 'HUE' },
					{ name: 'Oozie', value: 'Oozie' },
					{ name: 'Solr', value: 'Solr' },
					{ name: 'Spark', value: 'Spark' },
					{ name: 'Sqoop', value: 'Sqoop' },
					{ name: 'YARN', value: 'YARN' },
					{ name: 'ZooKeeper', value: 'ZooKeeper' },
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

		it('should restart a service via POST with service name', async () => {
			const mockData = { taskId: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'service':
							return 'Hive';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cluster/hadoop/cluster-12345/service/restart',
				{ service: 'Hive' },
			);
			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = { taskId: 67890 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster 1';
					switch (param) {
						case 'serviceName':
							return 'cluster 1';
						case 'service':
							return 'HDFS';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/cluster/hadoop/cluster%201/service/restart', {
				service: 'HDFS',
			});
		});
	});
});
