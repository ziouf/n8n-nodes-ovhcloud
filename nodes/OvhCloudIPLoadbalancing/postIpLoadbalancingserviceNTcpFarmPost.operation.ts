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
			displayName: 'Balance',
			name: 'balance',
			type: 'string',
			default: '',
			description: 'The balance value',
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
			displayName: 'Probe',
			name: 'probe',
			type: 'string',
			default: '',
			description: 'The probe value',
			displayOptions,
		},
		{
			displayName: 'Stickiness',
			name: 'stickiness',
			type: 'string',
			default: '',
			description: 'The stickiness value',
			displayOptions,
		},
		{
			displayName: 'VrackNetworkId',
			name: 'vrackNetworkId',
			type: 'string',
			default: '',
			description: 'The vracknetworkid value',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'The zone value',
			displayOptions,
		},
	];
}

/**
 * Add a new TCP Farm on your IP Load Balancing
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/farm
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const balance = this.getNodeParameter('balance', itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', itemIndex) as string;
	const port = this.getNodeParameter('port', itemIndex) as string;
	const probe = this.getNodeParameter('probe', itemIndex) as string;
	const stickiness = this.getNodeParameter('stickiness', itemIndex) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', itemIndex) as string;
	const zone = this.getNodeParameter('zone', itemIndex) as string;


const body: IDataObject = {
    balance: balance,
    displayName: displayName,
    port: port,
    probe: probe,
    stickiness: stickiness,
    vrackNetworkId: vrackNetworkId,
    zone: zone
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'tcp' + '/' + 'farm', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

