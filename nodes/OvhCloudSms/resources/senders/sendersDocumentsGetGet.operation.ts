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
	];
}

/**
 * Executes the Get /sms/{serviceName}/senders/{sender}/documents/{documentID} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/senders/{sender}/documents/{documentID}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const documentID = this.getNodeParameter('documentID', _itemIndex ?? 0) as string;
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}/documents/${encodeURIComponent(documentID)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
