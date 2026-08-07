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
 * Endpoint: /dedicated/housing
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['iamTags'] = this.getNodeParameter('iamTags', itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/housing', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
