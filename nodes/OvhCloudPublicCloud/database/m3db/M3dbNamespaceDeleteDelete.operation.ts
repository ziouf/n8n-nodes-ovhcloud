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
			displayName: 'Namespace ID',
			name: 'namespaceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The namespaceId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete m3db namespace operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace/{namespaceId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const namespaceId = this.getNodeParameter('namespaceId', _itemIndex ?? 0) as string;
	const data = (await client.httpDelete(`/cloud/project/${serviceName}/database/m3db/${clusterId}/namespace/${namespaceId}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
