import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List Hosting Tasks operation
 *
 * Retrieves all tasks for a specific private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Hosting Tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/task
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/task`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
