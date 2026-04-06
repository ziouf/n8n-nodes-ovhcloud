import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List configurations available for current hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/availableConfigurations` endpoint.
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
			description: 'Filter on language name',
			displayOptions,
		},
	];
}

/**
 * Executes the List configurations available for current hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/availableConfigurations
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const language = this.getNodeParameter('language', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/availableConfigurations`, { qs: { language } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
