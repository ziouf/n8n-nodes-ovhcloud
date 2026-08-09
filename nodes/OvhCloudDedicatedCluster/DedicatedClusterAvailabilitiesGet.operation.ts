import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [

	];
}

/**
 * Fetch the availabilities for a given cluster configuration
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/availabilities
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['memory'] = this.getNodeParameter('memory', _itemIndex, '') as string;
		qs['planCode'] = this.getNodeParameter('planCode', _itemIndex, '') as string;
		qs['quantity'] = this.getNodeParameter('quantity', _itemIndex, '') as string;
		qs['server'] = this.getNodeParameter('server', _itemIndex, '') as string;
		qs['storage'] = this.getNodeParameter('storage', _itemIndex, '') as string;
		qs['systemStorage'] = this.getNodeParameter('systemStorage', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/cluster/availabilities', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
