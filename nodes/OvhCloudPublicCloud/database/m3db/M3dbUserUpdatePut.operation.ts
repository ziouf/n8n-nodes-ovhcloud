import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The clusterId parameter',
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			description: 'The userId parameter',
			displayOptions,
		},
		{
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
			description: 'Group parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Updates the user on the m3db cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/user/{userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('group', _itemIndex ?? 0)) body.group = this.getNodeParameter('group', _itemIndex ?? 0);

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/m3db/${clusterId}/user/${userId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
