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
			displayName: 'Nodepool ID',
			name: 'nodePoolId',
			type: 'string',
			default: '',
			required: true,
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
 * Executes the Update Kube Nodepool operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/kube/{kubeId}/nodepool/{nodePoolId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', 0) as string;
	const nodePoolId = this.getNodeParameter('nodePoolId', 0) as string;
	const size = (this.getNodeParameter('size', 0) || 1) as number;

	const body: IDataObject = { size };
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/kube/${kubeId}/nodepool/${nodePoolId}`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
