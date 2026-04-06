import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Confirm DNS Zone Termination operation
 *
 * Confirms termination of a DNS zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/confirmTermination
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Confirm DNS Zone Termination operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/confirmTermination`)) as IDataObject;
	return [{ json: data }];
}
