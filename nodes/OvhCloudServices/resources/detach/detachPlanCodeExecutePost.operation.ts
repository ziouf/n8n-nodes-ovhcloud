import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'e.g. P1M',
			description: 'Duration selected for the operation execution',
			displayOptions,
		},
		{
			displayName: 'Pricing Mode',
			name: 'pricingMode',
			type: 'string',
			default: '',
			required: true,
			description: 'Pricing mode selected for the operation execution',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 0,
			required: true,
			description: 'Quantity for the operation execution',
			displayOptions,
		},
		{
			displayName: 'Auto Pay With Preferred Payment Method',
			name: 'autoPayWithPreferredPaymentMethod',
			type: 'boolean',
			default: false,
			description: 'Whether the order, if needed, will be automatically paid with preferred payment method',
			displayOptions,
		}

	];
}

/**
 * Executes the Post DetachExecute operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/detach/{planCode}/execute
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', _itemIndex) as string;
	const duration = this.getNodeParameter('duration', _itemIndex) as string;
	const pricingMode = this.getNodeParameter('pricingMode', _itemIndex) as string;
	const quantity = this.getNodeParameter('quantity', _itemIndex) as number;
	const autoPayWithPreferredPaymentMethod = this.getNodeParameter('autoPayWithPreferredPaymentMethod', _itemIndex, false) as boolean;
	const body: IDataObject = { duration, pricingMode, quantity };
	if (autoPayWithPreferredPaymentMethod) body.autoPayWithPreferredPaymentMethod = true;
	const client = getClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/detach/${encodeURIComponent(planCode)}/execute`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
