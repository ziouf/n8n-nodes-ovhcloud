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
	];
}

/**
 * Executes the EventTokenDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}/eventToken
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/telephony/' + encodeURIComponent(billingAccount) + '/eventToken')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
