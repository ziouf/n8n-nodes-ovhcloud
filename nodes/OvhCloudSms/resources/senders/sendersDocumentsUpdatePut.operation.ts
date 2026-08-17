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
			displayName: 'Document ID',
			name: 'documentID',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms sender',
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.SenderDocument',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Property of sms.SenderDocument',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/senders/{sender}/documents/{documentID} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/senders/{sender}/documents/{documentID}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const documentID = this.getNodeParameter('documentID', _itemIndex ?? 0) as string;
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (description) body['description'] = description;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	if (name) body['name'] = name;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}/documents/${encodeURIComponent(documentID)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
