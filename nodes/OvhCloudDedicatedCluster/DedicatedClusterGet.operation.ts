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
 * List dedicated clusters
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['iamTags'] = this.getNodeParameter('iamTags', itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/cluster', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
