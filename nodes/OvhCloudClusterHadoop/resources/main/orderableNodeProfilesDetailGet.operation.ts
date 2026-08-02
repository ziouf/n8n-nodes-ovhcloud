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
	];
}

/**
 * List the orderable node profiles for a specific Hadoop cluster.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop/{serviceName}/orderableNodeProfiles
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const data = (await client.httpGet(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/orderableNodeProfiles`,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { nodeProfile: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
