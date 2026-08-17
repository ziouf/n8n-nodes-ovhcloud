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
			displayName: 'Batch ID',
			name: 'batchID',
			type: 'string',
			default: '',
			description: 'Filter SMSs with their batch ID (outgoing SMSs only)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime From',
			name: 'creationDatetimeFrom',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDatetime property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime To',
			name: 'creationDatetimeTo',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDatetime property (<=)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Select sms with a specific identifier group tag',
			displayOptions,
		},
		{
			displayName: 'Way Type',
			name: 'wayType',
			type: 'options',
			default: 'incoming',
			options: [
				{ name: 'Incoming', value: 'incoming' },
				{ name: 'Outgoing', value: 'outgoing' },
			],
			required: true,
			description: 'Specify outgoing or incoming sms',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/document operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/document
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const batchID = this.getNodeParameter('batchID', _itemIndex ?? 0) as string;
	const creationDatetimeFrom = this.getNodeParameter('creationDatetimeFrom', _itemIndex ?? 0) as string;
	const creationDatetimeTo = this.getNodeParameter('creationDatetimeTo', _itemIndex ?? 0) as string;
	const tag = this.getNodeParameter('tag', _itemIndex ?? 0) as string;
	const wayType = this.getNodeParameter('wayType', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	qs['wayType'] = wayType;
	if (batchID) qs['batchID'] = batchID;
	if (creationDatetimeFrom) qs['creationDatetime.from'] = creationDatetimeFrom;
	if (creationDatetimeTo) qs['creationDatetime.to'] = creationDatetimeTo;
	if (tag) qs['tag'] = tag;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/document`,
		qs,
	)) as string;
	return this.helpers.returnJsonArray([{ value: data }]);
}
