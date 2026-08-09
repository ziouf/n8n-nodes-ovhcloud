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
 * List available services
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['iamTags'] = this.getNodeParameter('iamTags', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/nasha', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
