import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update a vRack network's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
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
			displayName: 'vRack Network ID',
			name: 'vrackNetworkId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the vRack network',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Network name',
			displayOptions,
		},
	];
}

/**
 * Executes the Update vRack Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', 0) as number;
	const body: IDataObject = {};
	const name = this.getNodeParameter('name', 0, '') as string;
	if (name) body.name = name;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
