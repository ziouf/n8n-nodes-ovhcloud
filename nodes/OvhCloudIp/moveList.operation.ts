import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * List Move Destinations operation.
 *
 * Lists services available as a destination for moving an IP.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/move
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Move Destinations operation.
 *
 * Lists services available as a destination for moving an IP.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing available destinations
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/move`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
