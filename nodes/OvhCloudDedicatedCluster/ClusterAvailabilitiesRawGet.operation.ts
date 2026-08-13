import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [

	];
}

/**
 * List the raw availability for cluster
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/availabilities/raw
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs: IDataObject = {};
			qs['excludeRegions'] = this.getNodeParameter('excludeRegions', _itemIndex, '') as string;
		qs['memory'] = this.getNodeParameter('memory', _itemIndex, '') as string;
		qs['planCode'] = this.getNodeParameter('planCode', _itemIndex, '') as string;
		qs['quantity'] = this.getNodeParameter('quantity', _itemIndex, '') as string;
		qs['regions'] = this.getNodeParameter('regions', _itemIndex, '') as string;
		qs['server'] = this.getNodeParameter('server', _itemIndex, '') as string;
		qs['storage'] = this.getNodeParameter('storage', _itemIndex, '') as string;
		qs['systemStorage'] = this.getNodeParameter('systemStorage', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/cluster/availabilities/raw', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
