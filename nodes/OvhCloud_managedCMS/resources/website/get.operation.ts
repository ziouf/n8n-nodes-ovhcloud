import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Managed CMS website.
 *
 * HTTP method: GET
 * Endpoint: /v2/managedCMS/website/{websiteId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Website ID',
			name: 'websiteId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the website',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Managed CMS Website operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const websiteId = this.getNodeParameter('websiteId', 0) as string;
	const data = (await client.httpGet(`/v2/managedCMS/website/${websiteId}`)) as IDataObject;
	return [{ json: data }];
}
