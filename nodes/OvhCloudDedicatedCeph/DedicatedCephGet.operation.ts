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
 * List available services
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs: IDataObject = {};
			qs['iamTags'] = this.getNodeParameter('iamTags', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/ceph', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
