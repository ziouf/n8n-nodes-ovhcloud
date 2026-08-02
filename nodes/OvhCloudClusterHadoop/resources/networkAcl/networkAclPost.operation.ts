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
			displayName: 'IP Block',
			name: 'block',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'e.g. 123.45.678.0/24',
			description: 'IP block to allow',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Free description of the ACL',
			displayOptions,
		},
	];
}

/**
 * Add an ACL to a Hadoop cluster.
 *
 * HTTP method: POST
 * Endpoint: /cluster/hadoop/{serviceName}/networkAcl
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const block = (this.getNodeParameter('block', 0, '') as string) || '';
	const description = (this.getNodeParameter('description', 0, '') as string) || '';

	const body: IDataObject = {};
	if (block) body.block = block;
	if (description) body.description = description;

	const data = (await client.httpPost(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/networkAcl`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
