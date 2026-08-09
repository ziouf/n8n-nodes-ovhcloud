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
		{
			displayName: 'Position',
			name: 'position',
			type: 'string',
			default: '',
			description: 'The position in the queue',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingQueueAgentPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', _itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const queueId = this.getNodeParameter('queueId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const position = this.getNodeParameter('position', _itemIndex) as string;

	const body: IDataObject = {
		position: position,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/queue' + '/' + encodeURIComponent(queueId) + '/agent' + '/' + encodeURIComponent(agentId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
