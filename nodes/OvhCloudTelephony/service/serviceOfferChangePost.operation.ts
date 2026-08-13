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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'string',
			default: '',
			required: true,
			description: 'The future offer',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceOfferChangePost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/offerChange
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const offer = this.getNodeParameter('offer', _itemIndex) as string;

	const body: IDataObject = {
		offer: offer,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/offerChange', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
