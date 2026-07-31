import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Kube ID',
			name: 'kubeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Kube cluster ID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The nodepool name',
			displayOptions,
		},
		{
			displayName: 'Flavor',
			name: 'flavor',
			type: 'string',
			default: '',
			required: true,
			description: 'The flavor name for the nodepool',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 1,
			description: 'The number of nodes in the nodepool',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Kube Nodepool operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/kube/{kubeId}/nodepool
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', 0) as string;
	const name = (this.getNodeParameter('name', 0) || '') as string;
	const flavor = (this.getNodeParameter('flavor', 0) || '') as string;
	const size = (this.getNodeParameter('size', 0) || 1) as number;

	if (!name) throw new Error('Name is required to create a nodepool');
	if (!flavor) throw new Error('Flavor is required to create a nodepool');

	const body: IDataObject = { name, flavor, size };
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/kube/${kubeId}/nodepool`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
