import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Request the last bounces operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/email/bounces` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'string',
			default: '',
			required: true,
			description: 'Maximum bounces limit ( default : 20 / max : 100 )',
			displayOptions,
		},
	];
}

/**
 * Executes the Request the last bounces operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/email/bounces
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const limit = this.getNodeParameter('limit', 0) as unknown as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/email/bounces`, {
		qs: { limit },
	})) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
