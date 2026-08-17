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
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Share description',
			displayOptions,
		},
		{
			displayName: 'Mount Point Name',
			name: 'mountPointName',
			type: 'string',
			default: '',
			description: 'User-defined name used to generate human readable access path for the share',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Share name',
			displayOptions,
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			type: 'options',
			options: [
				{ name: 'NFS', value: 'NFS' },
			],
			default: 'NFS',
			required: true,
			description: 'Share protocol',
			displayOptions,
		},
		{
			displayName: 'Size (GB)',
			name: 'size',
			type: 'number',
			default: 0,
			required: true,
			description: 'Share size in Gigabytes',
			displayOptions,
		},
	];
}

/**
 * Executes the Share replication accept operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}/accept
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareReplicationId = this.getNodeParameter('shareReplicationId', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const mountPointName = this.getNodeParameter('mountPointName', _itemIndex, '') as string;
	if (mountPointName !== '') { body.mountPointName = mountPointName; }
	const name = this.getNodeParameter('name', _itemIndex, '') as string;
	if (name !== '') { body.name = name; }
	body.protocol = this.getNodeParameter('protocol', _itemIndex) as string;
	body.size = this.getNodeParameter('size', _itemIndex) as number;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/shareReplication/${encodeURIComponent(shareReplicationId)}/accept`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
