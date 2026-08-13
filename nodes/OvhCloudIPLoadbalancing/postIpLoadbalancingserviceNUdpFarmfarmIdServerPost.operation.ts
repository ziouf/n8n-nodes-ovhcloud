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
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'The address value',
			displayOptions,
		},
		{
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'string',
			default: '',
			description: 'The port value',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status value',
			displayOptions,
		},
	];
}

/**
 * Add a server to an UDP Farm
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', _itemIndex) as string;



	const address = this.getNodeParameter('address', _itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const port = this.getNodeParameter('port', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;


const body: IDataObject = {
    address: address,
    displayName: displayName,
    port: port,
    status: status
    };

	const client = getClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'udp' + '/' + 'farm' + '/' + encodeURIComponent(farmId) + '/' + 'server', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

