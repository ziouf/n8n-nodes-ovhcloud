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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'The kind parameter',
			displayOptions,
		},
	];
}

/**
 * Log subscriptions for your Load Balancer
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const kind = this.getNodeParameter('kind', _itemIndex) as string;


const qs: IDataObject = {
    kind: kind
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'subscription', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

