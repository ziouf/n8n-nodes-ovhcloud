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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name identifier',
			displayOptions,
		},
	];
}

/**
 * Terminate your service zone option
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/zone/{name}/terminate
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'zone' + '/' + encodeURIComponent(name) + '/' + 'terminate', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

