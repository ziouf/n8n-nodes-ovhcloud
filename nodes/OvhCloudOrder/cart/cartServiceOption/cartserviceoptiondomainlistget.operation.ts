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
			displayName: 'Whois Owner',
			name: 'whoisOwner',
			type: 'string',
			default: '',
			description: 'Whois owner email',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Domain Cart Service Option operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cartServiceOption/domain
 */
 
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const whoisOwner = this.getNodeParameter('whoisOwner', _itemIndex, '') as string;


	const qs: IDataObject = {};
	if (whoisOwner) qs.whoisOwner = whoisOwner;

	const data = (await client.httpGet(`/order/cartServiceOption/domain`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
