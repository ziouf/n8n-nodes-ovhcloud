import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Get the service properties operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/emailOption/{id}/serviceInfos` endpoint.
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
			description: 'ID of the object',
			displayOptions,
		},
	];
}

/**
 * Executes the Get the service properties operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/emailOption/{id}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/emailOption/${id}/serviceInfos`)) as IDataObject;
	return [{ json: data }];
}
