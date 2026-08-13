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
			displayName: 'Billing Account Destination',
			name: 'billingAccountDestination',
			type: 'string',
			default: '',
			required: true,
			description: 'Billing account destination target',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceChangeOfBillingAccountPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const billingAccountDestination = this.getNodeParameter('billingAccountDestination', _itemIndex) as string;

	const body: IDataObject = {
		billingAccountDestination: billingAccountDestination,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/changeOfBillingAccount', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
