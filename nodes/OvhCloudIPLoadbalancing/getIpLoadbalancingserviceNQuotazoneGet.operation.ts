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
			required: true,
			description: 'The zone identifier',
			displayOptions,
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/quota/{zone}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const zone = this.getNodeParameter('zone', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'quota' + '/' + encodeURIComponent(zone))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

