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
 * Get details about available distributions for dedicated servers
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/templateInfos
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/templateInfos')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
