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
			description: 'Name of the service',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'string',
			default: '',
			required: true,
			description: 'Channels quantity to get the best repartition on',
			displayOptions,
		},
	];
}

/**
 * Executes the TrunkChannelsPacksRepartition List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const quantity = this.getNodeParameter('quantity', _itemIndex) as string;

	const qs: IDataObject = {
		quantity: quantity,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/trunk' + '/' + encodeURIComponent(serviceName) + '/channelsPacksRepartition', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
