import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

const CLUSTER_SERVICES: { name: string; value: string }[] = [
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
			displayName: 'Service',
			name: 'service',
			type: 'options',
			default: 'HDFS',
			options: CLUSTER_SERVICES,
			required: true,
			description: 'Name of the service to be stopped',
			displayOptions,
		},
	];
}

/**
 * Stop a Cloudera Manager service (this action will stop other dependant services).
 *
 * HTTP method: POST
 * Endpoint: /cluster/hadoop/{serviceName}/service/stop
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

	const body: IDataObject = { service };
	const data = (await client.httpPost(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/service/stop`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
