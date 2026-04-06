import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Get logs of a website deployment operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/website/{id}/deployment/{deploymentId}/logs` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Deployment ID',
			name: 'deploymentId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get logs of a website deployment operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/website/{id}/deployment/{deploymentId}/logs
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const deploymentId = this.getNodeParameter('deploymentId', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/website/${id}/deployment/${deploymentId}/logs`)) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
