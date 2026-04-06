import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Terminate DNS Zone operation
 *
 * Initiates termination of a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/terminate
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Terminate DNS Zone operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/terminate`)) as IDataObject;
	return [{ json: data }];
}
