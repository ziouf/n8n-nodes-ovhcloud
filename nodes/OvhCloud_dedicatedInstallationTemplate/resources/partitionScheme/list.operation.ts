/**
 * @brief List partition schemes for a Dedicated Installation Template
 *
 * Retrieves all partition schemes for a specific installation template:
 * - HTTP GET request to `/dedicated/installationTemplate/{templateName}/partitionScheme` endpoint
 * - Template name parameter is required
 * - Returns list of partition scheme names
 */
import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Partition Schemes operation.
 *
 * Retrieves all partition schemes for a specific installation template.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partition scheme names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const templateName = this.getNodeParameter('templateName', 0) as string;
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateName}/partitionScheme`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
