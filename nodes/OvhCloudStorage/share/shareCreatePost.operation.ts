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
			displayName: 'Access Mode',
			name: 'accessMode',
			type: 'options',
			options: [
				{ name: 'Ro', value: 'ro' },
				{ name: 'Rw', value: 'rw' },
			],
			default: 'ro',
			description: 'Share access mode',
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
		{
			displayName: 'Snapshot ID',
			name: 'snapshotID',
			type: 'string',
			default: '',
			description: 'Snapshot ID used to create the share',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Share status',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a share operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/share
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const accessMode = this.getNodeParameter('accessMode', _itemIndex, '') as string;
	if (accessMode !== '') { body.accessMode = accessMode; }
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const mountPointName = this.getNodeParameter('mountPointName', _itemIndex, '') as string;
	if (mountPointName !== '') { body.mountPointName = mountPointName; }
	const name = this.getNodeParameter('name', _itemIndex, '') as string;
	if (name !== '') { body.name = name; }
	body.protocol = this.getNodeParameter('protocol', _itemIndex) as string;
	body.size = this.getNodeParameter('size', _itemIndex) as number;
	const snapshotID = this.getNodeParameter('snapshotID', _itemIndex, '') as string;
	if (snapshotID !== '') { body.snapshotID = snapshotID; }
	const status = this.getNodeParameter('status', _itemIndex, '') as string;
	if (status !== '') { body.status = status; }
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/share`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
