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
			description: 'The kind value',
			displayOptions,
		},
		{
			displayName: 'StreamId',
			name: 'streamId',
			type: 'string',
			default: '',
			description: 'The streamid value',
			displayOptions,
		},
	];
}

/**
 * Create a log subscription for your Load Balancer
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const kind = this.getNodeParameter('kind', _itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex) as string;


const body: IDataObject = {
    kind: kind,
    streamId: streamId
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'subscription', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

