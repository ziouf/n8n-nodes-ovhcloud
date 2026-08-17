import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Userid',
			name: 'userId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'UserId ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete a user.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/user/{userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
await client.httpDelete(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/user/${userId}`);
	return [];
}
