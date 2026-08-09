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
			displayName: 'VrackNetworkId',
			name: 'vrackNetworkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vracknetworkid identifier',
			displayOptions,
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPut('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'vrack' + '/' + 'network' + '/' + encodeURIComponent(vrackNetworkId), {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

