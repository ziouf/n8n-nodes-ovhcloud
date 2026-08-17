import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Access Level',
			name: 'accessLevel',
			type: 'options',
			options: [
				{ name: 'Ro', value: 'ro' },
				{ name: 'Rw', value: 'rw' },
			],
			default: 'ro',
			required: true,
			description: 'Rule access level',
			displayOptions,
		},
		{
			displayName: 'Access To',
			name: 'accessTo',
			type: 'string',
			default: '',
			required: true,
			description: 'Rule destination',
			displayOptions,
		},
		{
			displayName: 'Access Type',
			name: 'accessType',
			type: 'options',
			options: [
				{ name: 'Ip', value: 'ip' },
			],
			default: 'ip',
			description: 'Rule access type',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Rule status',
			displayOptions,
		},
	];
}

/**
 * Executes the Create an ACL operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/share/{shareId}/acl
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareId = this.getNodeParameter('shareId', _itemIndex) as string;
	const body: IDataObject = {};
	body.accessLevel = this.getNodeParameter('accessLevel', _itemIndex) as string;
	body.accessTo = this.getNodeParameter('accessTo', _itemIndex) as string;
	const accessType = this.getNodeParameter('accessType', _itemIndex, '') as string;
	if (accessType !== '') { body.accessType = accessType; }
	const status = this.getNodeParameter('status', _itemIndex, '') as string;
	if (status !== '') { body.status = status; }
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/share/${encodeURIComponent(shareId)}/acl`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
