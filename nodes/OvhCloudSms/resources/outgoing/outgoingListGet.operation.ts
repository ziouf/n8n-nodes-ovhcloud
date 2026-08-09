import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Batch ID',
			name: 'batchID',
			type: 'string',
			default: '',
			description: 'Filter on batch ID property (=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime From',
			name: 'creationDatetimeFrom',
			type: 'string',
			default: '',
			description: 'Filter on creationDatetime property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime To',
			name: 'creationDatetimeTo',
			type: 'string',
			default: '',
			description: 'Filter on creationDatetime property (<=)',
			displayOptions,
		},
		{
			displayName: 'Delivery Receipt',
			name: 'deliveryReceipt',
			type: 'number',
			default: 0,
			description: 'Filter on deliveryReceipt property (=)',
			displayOptions,
		},
		{
			displayName: 'Differed Delivery',
			name: 'differedDelivery',
			type: 'number',
			default: 0,
			description: 'Filter on differedDelivery property (=)',
			displayOptions,
		},
		{
			displayName: 'Message ID',
			name: 'messageID',
			type: 'string',
			default: '',
			description: 'Filter on message ID property (=)',
			displayOptions,
		},
		{
			displayName: 'Ptt',
			name: 'ptt',
			type: 'number',
			default: 0,
			description: 'Filter on ptt property (=)',
			displayOptions,
		},
		{
			displayName: 'Receiver',
			name: 'receiver',
			type: 'string',
			default: '',
			description: 'Filter on receiver property (=)',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			description: 'Filter on sender property (=)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Filter on tag property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/outgoing operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/outgoing
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const batchID = this.getNodeParameter('batchID', _itemIndex ?? 0) as string;
	const creationDatetimeFrom = this.getNodeParameter('creationDatetimeFrom', _itemIndex ?? 0) as string;
	const creationDatetimeTo = this.getNodeParameter('creationDatetimeTo', _itemIndex ?? 0) as string;
	const deliveryReceipt = this.getNodeParameter('deliveryReceipt', _itemIndex ?? 0) as number;
	const differedDelivery = this.getNodeParameter('differedDelivery', _itemIndex ?? 0) as number;
	const messageID = this.getNodeParameter('messageID', _itemIndex ?? 0) as string;
	const ptt = this.getNodeParameter('ptt', _itemIndex ?? 0) as number;
	const receiver = this.getNodeParameter('receiver', _itemIndex ?? 0) as string;
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const tag = this.getNodeParameter('tag', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	if (batchID) qs['batchID'] = batchID;
	if (creationDatetimeFrom) qs['creationDatetime.from'] = creationDatetimeFrom;
	if (creationDatetimeTo) qs['creationDatetime.to'] = creationDatetimeTo;
	if (deliveryReceipt) qs['deliveryReceipt'] = deliveryReceipt;
	if (differedDelivery) qs['differedDelivery'] = differedDelivery;
	if (messageID) qs['messageID'] = messageID;
	if (ptt) qs['ptt'] = ptt;
	if (receiver) qs['receiver'] = receiver;
	if (sender) qs['sender'] = sender;
	if (tag) qs['tag'] = tag;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/outgoing`,
		qs,
	)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}
