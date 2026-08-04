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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Break Status',
			name: 'breakStatus',
			type: 'string',
			default: '',
			description: 'The ID of the current break status of the agent',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'The agent\'s description',
			displayOptions,
		},
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			description: 'The number of the agent',
			displayOptions,
		},
		{
			displayName: 'Simultaneous Lines',
			name: 'simultaneousLines',
			type: 'string',
			default: '',
			description: 'The maximum of simultaneous calls that the agent will receive from the hunting',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The current status of the agent',
			displayOptions,
		},
		{
			displayName: 'Timeout',
			name: 'timeout',
			type: 'string',
			default: '',
			description: 'The waiting timeout (in seconds) before hangup an assigned called',
			displayOptions,
		},
		{
			displayName: 'Wrap Up Time',
			name: 'wrapUpTime',
			type: 'string',
			default: '',
			description: 'The wrap up time (in seconds) after the calls',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingAgentPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const breakStatus = this.getNodeParameter('breakStatus', itemIndex) as string;
	const description = this.getNodeParameter('description', itemIndex) as string;
	const number = this.getNodeParameter('number', itemIndex) as string;
	const simultaneousLines = this.getNodeParameter('simultaneousLines', itemIndex) as string;
	const status = this.getNodeParameter('status', itemIndex) as string;
	const timeout = this.getNodeParameter('timeout', itemIndex) as string;
	const wrapUpTime = this.getNodeParameter('wrapUpTime', itemIndex) as string;

	const body: IDataObject = {
		breakStatus: breakStatus,
		description: description,
		number: number,
		simultaneousLines: simultaneousLines,
		status: status,
		timeout: timeout,
		wrapUpTime: wrapUpTime,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/agent' + '/' + encodeURIComponent(agentId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
