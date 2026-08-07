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
			displayName: 'IpLoadbalancing',
			name: 'ipLoadbalancing',
			type: 'string',
			default: '',
			description: 'The iploadbalancing value',
			displayOptions,
		},
	];
}

/**
 * add an ipLoadbalancing to this vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/ipLoadbalancing
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const ipLoadbalancing = this.getNodeParameter('ipLoadbalancing', itemIndex) as string;


const body: IDataObject = {
    ipLoadbalancing: ipLoadbalancing
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'ipLoadbalancing', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

