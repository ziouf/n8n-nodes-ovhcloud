import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

const ROLE_TYPES: { name: string; value: string }[] = [
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
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cluster Hadoop Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your Hadoop cluster',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getClusterHadoopServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'cluster-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Hostname',
			name: 'hostname',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'node-12345',
			description: 'Hostname of the node',
			displayOptions,
		},
		{
			displayName: 'Role Type',
			name: 'type',
			type: 'options',
			default: 'name_node',
			options: ROLE_TYPES,
			required: true,
			description: 'Role name',
			displayOptions,
		},
	];
}

/**
 * Get the properties of a role of a node.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const hostname = this.getNodeParameter('hostname', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const data = (await client.httpGet(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/node/${encodeURIComponent(hostname)}/role/${encodeURIComponent(type)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
