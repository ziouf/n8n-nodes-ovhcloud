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
			displayName: 'Product',
			name: 'product',
			type: 'options',
			options: [
				{ name: 'Public Cloud', value: 'publicCloud' },
				{ name: 'Dedicated Server', value: 'dedicatedServer' },
				{ name: 'Hosting', value: 'hosting' },
			],
			default: 'publicCloud',
			required: true,
			description: 'Name of a product supported by cloud projects',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Agreements operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/agreements
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const product = this.getNodeParameter('product', 0) as string;

	const data = (await client.httpGet('/publicCloud/agreements', {
		product,
	})) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
