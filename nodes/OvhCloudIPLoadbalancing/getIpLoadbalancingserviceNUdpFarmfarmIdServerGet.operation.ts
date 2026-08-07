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
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'The address parameter',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status parameter',
			displayOptions,
		},
	];
}

/**
 * UDP Farm's Servers
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', itemIndex) as string;

	const address = this.getNodeParameter('address', itemIndex) as string;
	const status = this.getNodeParameter('status', itemIndex) as string;


const qs: IDataObject = {
    address: address,
    status: status
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'udp' + '/' + 'farm' + '/' + encodeURIComponent(farmId) + '/' + 'server', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

