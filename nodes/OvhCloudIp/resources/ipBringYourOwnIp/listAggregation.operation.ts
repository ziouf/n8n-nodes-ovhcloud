import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List available aggregation configurations for BYOIP.
 *
 * Retrieves available aggregation configurations for a BYOIP Additional IP and its neighbors.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/aggregate
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List BYOIP Aggregation operation.
 *
 * Retrieves available aggregation configurations for a BYOIP Additional IP.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/aggregate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing aggregation previews
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/bringYourOwnIp/aggregate`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
