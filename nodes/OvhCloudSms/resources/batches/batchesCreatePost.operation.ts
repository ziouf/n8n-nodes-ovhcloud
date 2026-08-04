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
			displayName: 'Class',
			name: 'class',
			type: 'string',
			default: '',
			description: 'Property of sms.BatchParams (allowed values: FLASH, PHONE, SIM)',
			displayOptions,
		},
		{
			displayName: 'Deferred',
			name: 'deferred',
			type: 'string',
			default: '',
			description: 'Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			required: true,
			description: 'Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'No Stop',
			name: 'noStop',
			type: 'boolean',
			default: false,
			description: 'Whether Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'Sender For Response',
			name: 'senderForResponse',
			type: 'boolean',
			default: false,
			description: 'Whether Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'Slot ID',
			name: 'slotID',
			type: 'string',
			default: '',
			description: 'Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Property of sms.BatchParams',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			required: true,
			description: 'Property of sms.BatchParams (comma-separated list)',
			displayOptions,
		}
	];
}

/**
 * Executes the Post /sms/{serviceName}/batches operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/batches
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	const classValue = this.getNodeParameter('class', 0) as string;
	if (classValue) body['class'] = classValue;
	const deferred = this.getNodeParameter('deferred', 0) as string;
	if (deferred) body['deferred'] = deferred;
	const from = this.getNodeParameter('from', 0) as string;
	if (from) body['from'] = from;
	const message = this.getNodeParameter('message', 0) as string;
	body['message'] = message;
	const name = this.getNodeParameter('name', 0) as string;
	if (name) body['name'] = name;
	const noStop = this.getNodeParameter('noStop', 0) as boolean;
	if (noStop) body['noStop'] = noStop;
	const senderForResponse = this.getNodeParameter('senderForResponse', 0) as boolean;
	if (senderForResponse) body['senderForResponse'] = senderForResponse;
	const slotID = this.getNodeParameter('slotID', 0) as string;
	if (slotID) body['slotID'] = slotID;
	const tag = this.getNodeParameter('tag', 0) as string;
	if (tag) body['tag'] = tag;
	const to = this.getNodeParameter('to', 0) as string;
	body['to'] = (to as string).split(',').map((r: string) => r.trim());
	const data = (await new ApiClient(this).httpPost(`/sms/${encodeURIComponent(serviceName)}/batches`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
