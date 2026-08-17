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
			description: 'The configuration version to apply',
			displayOptions,
		},
	];
}

/**
 * Executes the Apply Load Balancer Configuration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/loadbalancer/{loadBalancerId}/configuration/{version}/apply
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const loadBalancerId = this.getNodeParameter('loadBalancerId', _itemIndex ?? 0) as string;
	const version = this.getNodeParameter('version', _itemIndex ?? 0) as number;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/loadbalancer/${loadBalancerId}/configuration/${version}/apply`,
		{},
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
