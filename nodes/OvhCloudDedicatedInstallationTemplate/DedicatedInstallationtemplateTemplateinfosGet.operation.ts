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
 * Get details about available distributions for dedicated servers
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/templateInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/templateInfos')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
