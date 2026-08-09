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
			displayName: 'Expiration',
			name: 'expiration',
			type: 'string',
			default: '',
			required: true,
			description: 'Time to live in seconds for the token',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingAgentEventTokenPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', _itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const expiration = this.getNodeParameter('expiration', _itemIndex) as string;

	const body: IDataObject = {
		expiration: expiration,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/agent' + '/' + encodeURIComponent(agentId) + '/eventToken', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
