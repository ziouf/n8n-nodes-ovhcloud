import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get SharePoint domain info.
 *
 * HTTP method: GET
 * Endpoint: /msServices/sharepoint/{domain}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The SharePoint domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Get SharePoint Domain operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const data = (await client.httpGet(`/msServices/sharepoint/${domain}`)) as IDataObject;
	return [{ json: data }];
}
