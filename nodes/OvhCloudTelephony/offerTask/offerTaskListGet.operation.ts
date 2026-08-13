import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'Filter the value of action property (=)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Filter the value of type property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the OfferTask List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/offerTask
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const action = this.getNodeParameter('action', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;

	const qs: IDataObject = {
		action: action,
		status: status,
		type: type,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/offerTask', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
