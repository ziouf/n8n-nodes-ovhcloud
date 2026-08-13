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
 * OVH operating system installation templates
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
