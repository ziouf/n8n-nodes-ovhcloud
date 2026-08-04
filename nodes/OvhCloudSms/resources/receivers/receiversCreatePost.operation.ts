import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		},
		{
			displayName: 'Auto Update',
			name: 'autoUpdate',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether Download file from URL before sending to contacts (works only with csvUrl and not document ID)',
			displayOptions,
		},
		{
			displayName: 'Csv URL',
			name: 'csvUrl',
			type: 'string',
			default: '',
			description: 'URL of the file you want to import',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			description: 'Description name of the document',
			displayOptions,
		},
		{
			displayName: 'Document ID',
			name: 'documentId',
			type: 'string',
			default: '',
			description: 'ID of the /me/document file you want to import',
			displayOptions,
		},
		{
			displayName: 'Slot ID',
			name: 'slotId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Slot number ID used to handle the document',
			displayOptions,
		}
	];
}

/**
 * Executes the Post /sms/{serviceName}/receivers operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/receivers
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const autoUpdate = this.getNodeParameter('autoUpdate', 0) as boolean;
	const csvUrl = this.getNodeParameter('csvUrl', 0) as string;
	const description = this.getNodeParameter('description', 0) as string;
	const documentId = this.getNodeParameter('documentId', 0) as string;
	const slotId = this.getNodeParameter('slotId', 0) as number;
	const body: IDataObject = {};
	body['autoUpdate'] = autoUpdate;
	if (csvUrl) body['csvUrl'] = csvUrl;
	body['description'] = description;
	if (documentId) body['documentId'] = documentId;
	body['slotId'] = slotId;
	const data = (await new ApiClient(this).httpPost(`/sms/${encodeURIComponent(serviceName)}/receivers`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
