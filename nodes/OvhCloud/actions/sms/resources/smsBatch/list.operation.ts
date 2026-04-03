import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List SMS Batches operation
 *
 * Retrieves all SMS batches for a given SMS service.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/batches
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/sms/${serviceName}/batches`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
