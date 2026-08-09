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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the portability',
			displayOptions,
		},
	];
}

/**
 * Executes the PortabilityDocument List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/portability/{id}/document
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/portability' + '/' + encodeURIComponent(id) + '/document')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
