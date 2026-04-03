import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List Hosting Databases operation
 *
 * Retrieves all databases for a specific private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Hosting Databases operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/database
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing database names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/database`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
