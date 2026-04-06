import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List available services operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Iam Tags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
	];
}

/**
 * Executes the List available services operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const iamTags = this.getNodeParameter('iamTags', 0) as string;
	const data = (await client.httpGet(`/hosting/web`, { qs: { iamTags } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
