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
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
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
		{
			displayName: 'NatIp',
			name: 'natIp',
			type: 'string',
			default: '',
			description: 'The natip value',
			displayOptions,
		},
		{
			displayName: 'Subnet',
			name: 'subnet',
			type: 'string',
			default: '',
			description: 'The subnet value',
			displayOptions,
		},
		{
			displayName: 'Vlan',
			name: 'vlan',
			type: 'string',
			default: '',
			description: 'The vlan value',
			displayOptions,
		},
	];
}

/**
 * Add a description of a private network in the attached vRack
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const displayName = this.getNodeParameter('displayName', itemIndex) as string;
	const farmId = this.getNodeParameter('farmId', itemIndex) as string;
	const natIp = this.getNodeParameter('natIp', itemIndex) as string;
	const subnet = this.getNodeParameter('subnet', itemIndex) as string;
	const vlan = this.getNodeParameter('vlan', itemIndex) as string;


const body: IDataObject = {
    displayName: displayName,
    farmId: farmId,
    natIp: natIp,
    subnet: subnet,
    vlan: vlan
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'vrack' + '/' + 'network', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

