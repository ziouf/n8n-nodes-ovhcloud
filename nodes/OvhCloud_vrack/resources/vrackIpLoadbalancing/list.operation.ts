/**
 * @brief List IP Loadbalancing services attached to a vRack
 *
 * Retrieves all IP Loadbalancing services attached to the specified vRack:
 * - HTTP GET request to `/vrack/{serviceName}/ipLoadbalancing` endpoint
 * - Returns list of IP Loadbalancing service identifiers
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

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/vrack/${serviceName}/ipLoadbalancing`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
