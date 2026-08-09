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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Product Code',
			name: 'productCode',
			type: 'string',
			default: '',
			description: 'Filter offers by product code',
			displayOptions,
		}

	];
}

/**
 * Executes the Get SubscribableSavingsPlans operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/savingsPlans/subscribable
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const productCode = (this.getNodeParameter('productCode', _itemIndex, '') as string) || '';
	const qs: IDataObject = {};
	if (productCode) qs.productCode = productCode;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribable`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
