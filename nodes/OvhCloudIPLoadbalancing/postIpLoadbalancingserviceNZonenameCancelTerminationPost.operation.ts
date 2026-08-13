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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Cancel the termination request of your service zone option
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'zone' + '/' + encodeURIComponent(name) + '/' + 'cancelTermination', {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

