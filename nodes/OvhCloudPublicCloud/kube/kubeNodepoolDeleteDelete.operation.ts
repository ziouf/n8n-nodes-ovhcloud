import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
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
	];
}

/**
 * Executes the Delete Kube Nodepool operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const nodePoolId = this.getNodeParameter('nodePoolId', _itemIndex ?? 0) as string;
	await client.httpDelete(
		`/cloud/project/${serviceName}/kube/${kubeId}/nodepool/${nodePoolId}`,
	);
	return this.helpers.returnJsonArray([{}]);
}
