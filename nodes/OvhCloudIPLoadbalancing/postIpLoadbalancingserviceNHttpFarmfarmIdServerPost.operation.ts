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
			description: 'The address value',
			displayOptions,
		},
		{
			displayName: 'Backup',
			name: 'backup',
			type: 'string',
			default: '',
			description: 'The backup value',
			displayOptions,
		},
		{
			displayName: 'Chain',
			name: 'chain',
			type: 'string',
			default: '',
			description: 'The chain value',
			displayOptions,
		},
		{
			displayName: 'Cookie',
			name: 'cookie',
			type: 'string',
			default: '',
			description: 'The cookie value',
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
			displayName: 'OnMarkedDown',
			name: 'onMarkedDown',
			type: 'string',
			default: '',
			description: 'The onmarkeddown value',
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
			displayName: 'Probe',
			name: 'probe',
			type: 'string',
			default: '',
			description: 'The probe value',
			displayOptions,
		},
		{
			displayName: 'ProxyProtocolVersion',
			name: 'proxyProtocolVersion',
			type: 'string',
			default: '',
			description: 'The proxyprotocolversion value',
			displayOptions,
		},
		{
			displayName: 'Ssl',
			name: 'ssl',
			type: 'string',
			default: '',
			description: 'The ssl value',
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
		{
			displayName: 'Weight',
			name: 'weight',
			type: 'string',
			default: '',
			description: 'The weight value',
			displayOptions,
		},
	];
}

/**
 * Add a server to an HTTP Farm
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', _itemIndex) as string;



	const address = this.getNodeParameter('address', _itemIndex) as string;
	const backup = this.getNodeParameter('backup', _itemIndex) as string;
	const chain = this.getNodeParameter('chain', _itemIndex) as string;
	const cookie = this.getNodeParameter('cookie', _itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const onMarkedDown = this.getNodeParameter('onMarkedDown', _itemIndex) as string;
	const port = this.getNodeParameter('port', _itemIndex) as string;
	const probe = this.getNodeParameter('probe', _itemIndex) as string;
	const proxyProtocolVersion = this.getNodeParameter('proxyProtocolVersion', _itemIndex) as string;
	const ssl = this.getNodeParameter('ssl', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;
	const weight = this.getNodeParameter('weight', _itemIndex) as string;


const body: IDataObject = {
    address: address,
    backup: backup,
    chain: chain,
    cookie: cookie,
    displayName: displayName,
    onMarkedDown: onMarkedDown,
    port: port,
    probe: probe,
    proxyProtocolVersion: proxyProtocolVersion,
    ssl: ssl,
    status: status,
    weight: weight
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'http' + '/' + 'farm' + '/' + encodeURIComponent(farmId) + '/' + 'server', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

