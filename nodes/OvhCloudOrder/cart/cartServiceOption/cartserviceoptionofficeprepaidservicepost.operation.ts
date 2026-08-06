import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			default: '',
			required: true,
			description: 'Cart identifier',
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			description: 'Duration selected for the purchase of the product',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the option offer',
			displayOptions,
		},
		{
			displayName: 'Pricing Mode',
			name: 'pricingMode',
			type: 'string',
			default: '',
			required: true,
			description: 'Pricing mode selected for the purchase of the product',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 0,
			required: true,
			description: 'Quantity of product desired',
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
	];
}

/**
 * Executes the Add Officeprepaid Cart Service Option operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cartServiceOption/officePrepaid/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const duration = this.getNodeParameter('duration', 0, '') as string;
	const planCode = this.getNodeParameter('planCode', 0, '') as string;
	const pricingMode = this.getNodeParameter('pricingMode', 0, '') as string;
	const quantity = this.getNodeParameter('quantity', 0, 0) as number;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	void serviceName; // used in template literal
	const body: IDataObject = {
		cartId,
		duration,
		planCode,
		pricingMode,
		quantity,
	};

	const data = (await client.httpPost(`/order/cartServiceOption/officePrepaid/{serviceName}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
