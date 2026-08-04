import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Agent ID',
			name: 'agentId',
			type: 'string',
			default: '',
			required: true,
			description: 'The agentId parameter',
			displayOptions,
		},
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Queue ID',
			name: 'queueId',
			type: 'string',
			default: '',
			required: true,
			description: 'The queueId parameter',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingQueueAgentLiveStatus List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const queueId = this.getNodeParameter('queueId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/queue' + '/' + encodeURIComponent(queueId) + '/agent' + '/' + encodeURIComponent(agentId) + '/liveStatus')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
