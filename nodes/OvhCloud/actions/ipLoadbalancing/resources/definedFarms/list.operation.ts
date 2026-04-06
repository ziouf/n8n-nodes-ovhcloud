import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List defined farms, and whether they are HTTP, TCP or UDP.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/definedFarms
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Vrack Network ID',
			name: 'vrackNetworkId',
			type: 'number',
			default: 0,
			description: 'Filter by vRack network ID',
			displayOptions,
		},
	];
}

/**
 * Executes the List Defined Farms operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', 0, 0) as number;
	const qs: Record<string, string> = {};
	if (vrackNetworkId) qs.vrackNetworkId = String(vrackNetworkId);
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/definedFarms`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
