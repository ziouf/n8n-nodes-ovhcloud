import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kind name to subscribe to',
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'Customer log stream ID',
		},
	];
}

/**
 * Create a subscription from logs to a pre-existing LDP stream
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/log/subscription
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const kind = this.getNodeParameter('kind', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;

	const body: IDataObject = {
		kind: kind,
		streamId: streamId,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/log/subscription", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
