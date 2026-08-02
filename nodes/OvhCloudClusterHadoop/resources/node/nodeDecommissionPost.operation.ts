import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			description: 'Hostname of the node to decommission',
			displayOptions,
		},
	];
}

/**
 * Decommission a node and all the services on it.
 *
 * HTTP method: POST
 * Endpoint: /cluster/hadoop/{serviceName}/node/{hostname}/decommission
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const hostname = this.getNodeParameter('hostname', 0) as string;
	const data = (await client.httpPost(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/node/${encodeURIComponent(hostname)}/decommission`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
