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
			displayName: 'Pricing Mode',
			name: 'pricingMode',
			type: 'string',
			default: '',
			required: true,
			description: 'Pricing mode to use in order to engage the Service',
			displayOptions,
		}

	];
}

/**
 * Executes the Post EngagementRequest operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/billing/engagement/request
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const pricingMode = this.getNodeParameter('pricingMode', _itemIndex) as string;
	const body: IDataObject = { pricingMode };
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/billing/engagement/request`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
