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
 * Executes the Get Vxml List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/vxml
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/vxml')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
