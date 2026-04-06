import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Find freedoms linked to the hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/freedom` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter the freedom status (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Find freedoms linked to the hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/freedom
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const status = this.getNodeParameter('status', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/freedom`, { qs: { status } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
