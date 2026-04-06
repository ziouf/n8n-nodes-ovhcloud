import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update farm attached to a vRack network.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
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
			displayName: 'Farm IDs',
			name: 'farmIds',
			type: 'string',
			default: '',
			required: true,
			description: 'Comma-separated list of farm IDs to attach',
			displayOptions,
		},
	];
}

/**
 * Executes the Update vRack Network Farm IDs operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', 0) as number;
	const farmIdsStr = this.getNodeParameter('farmIds', 0) as string;
	const farmIds = farmIdsStr.split(',').map((id) => parseInt(id.trim(), 10));
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}/updateFarmId`,
		{ body: farmIds },
	)) as IDataObject;
	return [{ json: data }];
}
