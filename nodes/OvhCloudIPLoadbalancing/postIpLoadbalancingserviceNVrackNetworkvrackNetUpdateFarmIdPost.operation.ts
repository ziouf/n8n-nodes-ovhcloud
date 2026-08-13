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
			displayName: 'VrackNetworkId',
			name: 'vrackNetworkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vRACK network ID',
			displayOptions,
		},
		{
			displayName: 'FarmId',
			name: 'farmId',
			type: 'string',
			default: '',
			description: 'The farmid value',
			displayOptions,
		},
	];
}

/**
 * Update farm attached to that vrack network id
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', _itemIndex) as string;



	const farmId = this.getNodeParameter('farmId', _itemIndex) as string;


const body: IDataObject = {
    farmId: farmId
    };

	const client = getClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'vrack' + '/' + 'network' + '/' + encodeURIComponent(vrackNetworkId) + '/' + 'updateFarmId', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

