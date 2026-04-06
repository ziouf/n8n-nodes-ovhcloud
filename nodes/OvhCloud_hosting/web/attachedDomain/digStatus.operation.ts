import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get attachedDomain DNS status operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/attachedDomain/{domain}/digStatus` endpoint.
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
 * Executes the Get attachedDomain DNS status operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/attachedDomain/{domain}/digStatus
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/attachedDomain/${domain}/digStatus`)) as IDataObject;
	return [{ json: data }];
}
