import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Regenerate a hosted SSL operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/attachedDomain/{domain}/ssl/regenerate` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Regenerate a hosted SSL operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/attachedDomain/{domain}/ssl/regenerate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/attachedDomain/${domain}/ssl/regenerate`)) as IDataObject;
	return [{ json: data }];
}
