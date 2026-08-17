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
			displayName: 'Load Balancer ID',
			name: 'loadBalancerId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Configuration Version',
			name: 'version',
			type: 'number',
			default: 0,
			required: true,
			description: 'The configuration version to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Load Balancer Configuration operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{projectId}/loadbalancer/{loadBalancerId}/configuration/{version}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const loadBalancerId = this.getNodeParameter('loadBalancerId', _itemIndex ?? 0) as string;
	const version = this.getNodeParameter('version', _itemIndex ?? 0) as number;

	await client.httpDelete(
		`/cloud/project/${projectId}/loadbalancer/${loadBalancerId}/configuration/${version}`,
	);

	return this.helpers.returnJsonArray([{ message: 'Configuration deleted' }]);
}
