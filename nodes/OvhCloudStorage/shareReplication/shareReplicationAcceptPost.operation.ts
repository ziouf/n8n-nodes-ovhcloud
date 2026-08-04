import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			],
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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareReplicationId = this.getNodeParameter('shareReplicationId', itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const mountPointName = this.getNodeParameter('mountPointName', itemIndex, '') as string;
	if (mountPointName !== '') { body.mountPointName = mountPointName; }
	const name = this.getNodeParameter('name', itemIndex, '') as string;
	if (name !== '') { body.name = name; }
	body.protocol = this.getNodeParameter('protocol', itemIndex) as string;
	body.size = this.getNodeParameter('size', itemIndex) as number;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/shareReplication/${encodeURIComponent(shareReplicationId)}/accept`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
