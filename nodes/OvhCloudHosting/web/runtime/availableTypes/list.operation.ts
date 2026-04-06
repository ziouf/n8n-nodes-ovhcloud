import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief List available runtime configurations available backend types operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/runtimeAvailableTypes` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			description: 'Specific programming language to filter',
			displayOptions,
		},
	];
}

/**
 * Executes the List available runtime configurations available backend types operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/runtimeAvailableTypes
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const language = this.getNodeParameter('language', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/runtimeAvailableTypes`, { qs: { language } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
