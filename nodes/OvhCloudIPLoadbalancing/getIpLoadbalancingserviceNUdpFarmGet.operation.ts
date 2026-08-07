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
			description: 'The vracknetworkid parameter',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'The zone parameter',
			displayOptions,
		},
	];
}

/**
 * UDP Farm for this iplb
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/farm
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', itemIndex) as string;
	const zone = this.getNodeParameter('zone', itemIndex) as string;


const qs: IDataObject = {
    vrackNetworkId: vrackNetworkId,
    zone: zone
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'udp' + '/' + 'farm', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

