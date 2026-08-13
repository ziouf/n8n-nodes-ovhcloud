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
			description: 'The vracknetworkid parameter',
			displayOptions,
		},
	];
}

/**
 * List of defined farms, and whether they are HTTP, TCP or UDP
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/definedFarms
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', _itemIndex) as string;


const qs: IDataObject = {
    vrackNetworkId: vrackNetworkId
  };



	const client = getClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'definedFarms', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

