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
			displayName: 'Expiration',
			name: 'expiration',
			type: 'string',
			default: '',
			required: true,
			description: 'Time to live in seconds for the token',
			displayOptions,
		},
	];
}

/**
 * Executes the EventTokenPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/eventToken
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const expiration = this.getNodeParameter('expiration', _itemIndex) as string;

	const body: IDataObject = {
		expiration: expiration,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/eventToken', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
