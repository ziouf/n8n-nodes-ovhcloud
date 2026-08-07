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
 * Apply the configuration to your iplb
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/refresh
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const zone = this.getNodeParameter('zone', itemIndex) as string;


const body: IDataObject = {
    zone: zone
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'refresh', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

