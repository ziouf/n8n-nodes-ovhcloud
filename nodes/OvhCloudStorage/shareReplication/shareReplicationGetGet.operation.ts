import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
 * Executes the Get share replication details operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareReplicationId = this.getNodeParameter('shareReplicationId', _itemIndex) as string;
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/shareReplication/${encodeURIComponent(shareReplicationId)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
