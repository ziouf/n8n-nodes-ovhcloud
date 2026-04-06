import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Get databases linked with this option operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/extraSqlPerso/{id}/databases` endpoint.
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
			description: 'Identifier of the (additional) SQL slot',
			displayOptions,
		},
	];
}

/**
 * Executes the Get databases linked with this option operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/extraSqlPerso/{id}/databases
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/extraSqlPerso/${id}/databases`)) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
