import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'FarmId',
			name: 'farmId',
			type: 'string',
			default: '',
			required: true,
			description: 'The farm ID',
			displayOptions,
		},
		{
			displayName: 'ServerId',
			name: 'serverId',
			type: 'string',
			default: '',
			required: true,
			description: 'The server ID',
			displayOptions,
		},
	];
}

/**
 * Delete a server from an HTTP Farm
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', _itemIndex) as string;
	const serverId = this.getNodeParameter('serverId', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'http' + '/' + 'farm' + '/' + encodeURIComponent(farmId) + '/' + 'server' + '/' + encodeURIComponent(serverId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

