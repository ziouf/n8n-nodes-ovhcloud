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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the object',
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
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Phone number to whom the communication will be transfered',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxHuntingAgentCallsTransferPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', _itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const number = this.getNodeParameter('number', _itemIndex) as string;

	const body: IDataObject = {
		number: number,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/agent' + '/' + encodeURIComponent(agentId) + '/calls' + '/' + encodeURIComponent(id) + '/transfer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
