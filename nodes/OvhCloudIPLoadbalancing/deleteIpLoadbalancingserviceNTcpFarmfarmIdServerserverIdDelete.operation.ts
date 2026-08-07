import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'FarmId',
			name: 'farmId',
			type: 'string',
			default: '',
			required: true,
			description: 'The farmid identifier',
			displayOptions,
		},
		{
			displayName: 'ServerId',
			name: 'serverId',
			type: 'string',
			default: '',
			required: true,
			description: 'The serverid identifier',
			displayOptions,
		},
	];
}

/**
 * Delete a server from a TCP Farm
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', itemIndex) as string;
	const serverId = this.getNodeParameter('serverId', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'farm' + '/' + encodeURIComponent(farmId) + '/' + 'server' + '/' + encodeURIComponent(serverId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

