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
 * List the raw availability for cluster
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/availabilities/raw
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['excludeRegions'] = this.getNodeParameter('excludeRegions', itemIndex, '') as string;
		qs['memory'] = this.getNodeParameter('memory', itemIndex, '') as string;
		qs['planCode'] = this.getNodeParameter('planCode', itemIndex, '') as string;
		qs['quantity'] = this.getNodeParameter('quantity', itemIndex, '') as string;
		qs['regions'] = this.getNodeParameter('regions', itemIndex, '') as string;
		qs['server'] = this.getNodeParameter('server', itemIndex, '') as string;
		qs['storage'] = this.getNodeParameter('storage', itemIndex, '') as string;
		qs['systemStorage'] = this.getNodeParameter('systemStorage', itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/cluster/availabilities/raw', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
