import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Alter this object properties operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/cdn/serviceInfosUpdate` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Renew',
			name: 'renew',
			type: 'string',
			default: '',
			required: true,
			description: 'Renew type',
			displayOptions,
		},
	];
}

/**
 * Executes the Alter this object properties operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/cdn/serviceInfosUpdate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const renew = this.getNodeParameter('renew', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/cdn/serviceInfosUpdate`, { body: { renew: renew } })) as IDataObject;
	return [{ json: data }];
}
