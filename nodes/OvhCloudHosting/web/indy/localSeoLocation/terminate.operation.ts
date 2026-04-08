import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Terminate a local SEO sub service operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/localSeo/location/{id}/terminate` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'Location ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate a local SEO sub service operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/localSeo/location/{id}/terminate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/localSeo/location/${id}/terminate`)) as IDataObject;
	return [{ json: data }];
}
