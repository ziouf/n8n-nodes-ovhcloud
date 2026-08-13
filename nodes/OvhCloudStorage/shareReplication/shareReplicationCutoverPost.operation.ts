import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getNetAppServices',
				displayName: 'NetApp Service Name',
				description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
				placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			}),
			displayOptions,
		},
		{
			displayName: 'Share Replication ID',
			name: 'shareReplicationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Cutover share replication operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}/cutover
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareReplicationId = this.getNodeParameter('shareReplicationId', _itemIndex) as string;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/shareReplication/${encodeURIComponent(shareReplicationId)}/cutover`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
