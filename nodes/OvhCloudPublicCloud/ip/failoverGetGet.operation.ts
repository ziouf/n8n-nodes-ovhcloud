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
			displayName: 'Failover IP ID',
			name: 'failoverIpId',
			type: 'string',
			default: '',
			required: true,
			description: 'The failover IP',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Failover IP operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{projectId}/ip/failover/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const failoverIpId = this.getNodeParameter('failoverIpId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/cloud/project/${projectId}/ip/failover/${failoverIpId}`,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
