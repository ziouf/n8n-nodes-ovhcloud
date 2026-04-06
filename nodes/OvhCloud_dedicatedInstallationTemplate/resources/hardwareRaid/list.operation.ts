/**
 * @brief List hardware RAIDs for a partition scheme
 *
 * Retrieves all hardware RAID configurations for a specific partition scheme:
 * - HTTP GET request to `/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid` endpoint
 * - Template name and scheme name parameters are required
 * - Returns list of hardware RAID names
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
 * Executes the List Hardware RAIDs operation.
 *
 * Retrieves all hardware RAID configurations for a specific partition scheme.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing hardware RAID names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const templateName = this.getNodeParameter('templateName', 0) as string;
	const schemeName = this.getNodeParameter('schemeName', 0) as string;
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
