import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get SharePoint domain service info.
 *
 * HTTP method: GET
 * Endpoint: /msServices/sharepoint/{domain}/serviceInfos
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
 * Executes the Get SharePoint Domain Service Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const data = (await client.httpGet(
		`/msServices/sharepoint/${domain}/serviceInfos`,
	)) as IDataObject;
	return [{ json: data }];
}
