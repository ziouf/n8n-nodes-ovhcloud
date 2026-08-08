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
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'The virtual number',
			displayOptions,
		},
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
			displayName: 'Delivery Receipt',
			name: 'deliveryReceipt',
			type: 'number',
			default: 0,
			description: 'Filter the value of deliveryReceipt property (=)',
			displayOptions,
		},
		{
			displayName: 'Differed Delivery',
			name: 'differedDelivery',
			type: 'number',
			default: 0,
			description: 'Filter the value of differedDelivery property (=)',
			displayOptions,
		},
		{
			displayName: 'Ptt',
			name: 'ptt',
			type: 'number',
			default: 0,
			description: 'Filter the value of ptt property (=)',
			displayOptions,
		},
		{
			displayName: 'Receiver',
			name: 'receiver',
			type: 'string',
			default: '',
			description: 'Filter the value of receiver property (=)',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			description: 'Filter the value of sender property (=)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Filter the value of tag property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/virtualNumbers/{number}/outgoing operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/virtualNumbers/{number}/outgoing
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const creationDatetimeFrom = this.getNodeParameter('creationDatetimeFrom', 0) as string;
	const creationDatetimeTo = this.getNodeParameter('creationDatetimeTo', 0) as string;
	const deliveryReceipt = this.getNodeParameter('deliveryReceipt', 0) as number;
	const differedDelivery = this.getNodeParameter('differedDelivery', 0) as number;
	const ptt = this.getNodeParameter('ptt', 0) as number;
	const receiver = this.getNodeParameter('receiver', 0) as string;
	const sender = this.getNodeParameter('sender', 0) as string;
	const tag = this.getNodeParameter('tag', 0) as string;
	const qs: IDataObject = {};
	if (creationDatetimeFrom) qs['creationDatetime.from'] = creationDatetimeFrom;
	if (creationDatetimeTo) qs['creationDatetime.to'] = creationDatetimeTo;
	if (deliveryReceipt) qs['deliveryReceipt'] = deliveryReceipt;
	if (differedDelivery) qs['differedDelivery'] = differedDelivery;
	if (ptt) qs['ptt'] = ptt;
	if (receiver) qs['receiver'] = receiver;
	if (sender) qs['sender'] = sender;
	if (tag) qs['tag'] = tag;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/virtualNumbers/${encodeURIComponent(number)}/outgoing`,
		qs,
	)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}
