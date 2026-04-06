import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List mitigation profiles for an IP block.
 *
 * Retrieves all mitigation profiles for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/mitigationProfiles
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Mitigation Profiles operation.
 *
 * Retrieves all mitigation profiles for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/mitigationProfiles
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing mitigation profile IPs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/mitigationProfiles`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
