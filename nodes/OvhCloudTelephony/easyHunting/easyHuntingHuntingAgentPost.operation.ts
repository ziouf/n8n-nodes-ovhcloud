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
			required: true,
			description: 'The number of the agent',
			displayOptions,
		},
		{
			displayName: 'Simultaneous Lines',
			name: 'simultaneousLines',
			type: 'string',
			default: '',
			required: true,
			description: 'The maximum of simultaneous calls that the agent will receive from the hunting',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			required: true,
			description: 'The current status of the agent',
			displayOptions,
		},
		{
			displayName: 'Timeout',
			name: 'timeout',
			type: 'string',
			default: '',
			required: true,
			description: 'The waiting timeout (in seconds) before hangup for an assigned called',
			displayOptions,
		},
		{
			displayName: 'Wrap Up Time',
			name: 'wrapUpTime',
			type: 'string',
			default: '',
			required: true,
			description: 'The wrap up time (in seconds) after the calls',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingAgentPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const number = this.getNodeParameter('number', _itemIndex) as string;
	const simultaneousLines = this.getNodeParameter('simultaneousLines', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;
	const timeout = this.getNodeParameter('timeout', _itemIndex) as string;
	const wrapUpTime = this.getNodeParameter('wrapUpTime', _itemIndex) as string;

	const body: IDataObject = {
		description: description,
		number: number,
		simultaneousLines: simultaneousLines,
		status: status,
		timeout: timeout,
		wrapUpTime: wrapUpTime,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/agent', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
