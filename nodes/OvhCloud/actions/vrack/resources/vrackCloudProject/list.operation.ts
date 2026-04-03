/**
 * @brief List cloud projects attached to a vRack
 *
 * Retrieves all cloud projects attached to the specified vRack:
 * - HTTP GET request to `/vrack/{serviceName}/cloudProject` endpoint
 * - Returns list of cloud project identifiers
 */
import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/vrack/${serviceName}/cloudProject`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
