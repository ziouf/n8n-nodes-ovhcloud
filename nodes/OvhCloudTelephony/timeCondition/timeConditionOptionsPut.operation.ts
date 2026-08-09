import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Slot1 Number',
			name: 'slot1Number',
			type: 'string',
			default: '',
			description: 'Number associated to the first slot action',
			displayOptions,
		},
		{
			displayName: 'Slot1 Type',
			name: 'slot1Type',
			type: 'string',
			default: '',
			description: 'Action type executed when the first slot is used',
			displayOptions,
		},
		{
			displayName: 'Slot2 Number',
			name: 'slot2Number',
			type: 'string',
			default: '',
			description: 'Number associated to the second slot action',
			displayOptions,
		},
		{
			displayName: 'Slot2 Type',
			name: 'slot2Type',
			type: 'string',
			default: '',
			description: 'Action type executed when the second slot is used',
			displayOptions,
		},
		{
			displayName: 'Slot3 Number',
			name: 'slot3Number',
			type: 'string',
			default: '',
			description: 'Number associated to the third slot action',
			displayOptions,
		},
		{
			displayName: 'Slot3 Type',
			name: 'slot3Type',
			type: 'string',
			default: '',
			description: 'Action type executed when the third slot is used',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Status of time conditions',
			displayOptions,
		},
		{
			displayName: 'Timeout',
			name: 'timeout',
			type: 'string',
			default: '',
			description: 'Timeout value of the time condition',
			displayOptions,
		},
		{
			displayName: 'Unavailable Number',
			name: 'unavailableNumber',
			type: 'string',
			default: '',
			description: 'Number associated to the unavailable slot action',
			displayOptions,
		},
		{
			displayName: 'Unavailable Type',
			name: 'unavailableType',
			type: 'string',
			default: '',
			description: 'Action type executed when the unavailable slot is used',
			displayOptions,
		},
	];
}

/**
 * Executes the TimeConditionOptionsPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/timeCondition/{serviceName}/options
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const slot1Number = this.getNodeParameter('slot1Number', _itemIndex) as string;
	const slot1Type = this.getNodeParameter('slot1Type', _itemIndex) as string;
	const slot2Number = this.getNodeParameter('slot2Number', _itemIndex) as string;
	const slot2Type = this.getNodeParameter('slot2Type', _itemIndex) as string;
	const slot3Number = this.getNodeParameter('slot3Number', _itemIndex) as string;
	const slot3Type = this.getNodeParameter('slot3Type', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;
	const timeout = this.getNodeParameter('timeout', _itemIndex) as string;
	const unavailableNumber = this.getNodeParameter('unavailableNumber', _itemIndex) as string;
	const unavailableType = this.getNodeParameter('unavailableType', _itemIndex) as string;

	const body: IDataObject = {
		slot1Number: slot1Number,
		slot1Type: slot1Type,
		slot2Number: slot2Number,
		slot2Type: slot2Type,
		slot3Number: slot3Number,
		slot3Type: slot3Type,
		status: status,
		timeout: timeout,
		unavailableNumber: unavailableNumber,
		unavailableType: unavailableType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/timeCondition' + '/' + encodeURIComponent(serviceName) + '/options', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
