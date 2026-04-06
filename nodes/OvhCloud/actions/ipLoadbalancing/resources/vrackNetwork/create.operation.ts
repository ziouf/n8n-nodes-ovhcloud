import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a description of a private network in the attached vRack.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network
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
			displayName: 'VLAN',
			name: 'vlan',
			type: 'number',
			default: 0,
			required: true,
			description: 'VLAN ID',
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
 * Executes the Create vRack Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	body.vlan = this.getNodeParameter('vlan', 0) as number;
	const name = this.getNodeParameter('name', 0, '') as string;
	if (name) body.name = name;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/vrack/network`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
