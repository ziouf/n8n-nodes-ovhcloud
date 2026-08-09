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
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Plan code for the upgrade',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the service',
			displayOptions,
		},
		{
			displayName: 'Auto Pay With Preferred Payment Method',
			name: 'autoPayWithPreferredPaymentMethod',
			type: 'boolean',
			default: false,
			description: 'Whether to automatically pay with preferred payment method',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 0,
			required: true,
			description: 'Quantity to upgrade',
			displayOptions,
		},
	];
}

/**
 * Executes the Upgrade Private SQL operation.
 *
 * HTTP method: POST
 * Endpoint: /order/upgrade/privateSQL/{domain}/{planCode}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const planCode = this.getNodeParameter('planCode', _itemIndex) as string;
	void planCode; // used in template literal
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	void domain; // used in template literal
	const autoPayWithPreferredPaymentMethod = this.getNodeParameter('autoPayWithPreferredPaymentMethod', _itemIndex ?? 0, false) as boolean;
	const quantity = this.getNodeParameter('quantity', _itemIndex ?? 0, 0) as number;
	const body: IDataObject = {
		autoPayWithPreferredPaymentMethod,
		quantity,
	};

	const data = (await client.httpPost(`/order/upgrade/privateSQL/{domain}/{planCode}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
