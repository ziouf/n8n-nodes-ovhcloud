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
			displayName: 'Node Profile',
			name: 'nodeProfile',
			type: 'string',
			default: '',
			required: true,
			description: 'Node profile you want to order',
			displayOptions,
		},
	];
}

/**
 * Order a new node in the cluster with hourly billing.
 *
 * HTTP method: POST
 * Endpoint: /cluster/hadoop/{serviceName}/orderNewNodeHourly
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const nodeProfile = this.getNodeParameter('nodeProfile', 0) as string;

	const body: IDataObject = { nodeProfile };
	const data = (await client.httpPost(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/orderNewNodeHourly`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
