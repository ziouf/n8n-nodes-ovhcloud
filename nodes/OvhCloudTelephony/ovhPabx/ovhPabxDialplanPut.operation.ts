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
			displayName: 'Dialplan ID',
			name: 'dialplanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The dialplanId parameter',
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
			displayName: 'Anonymous Rejection',
			name: 'anonymousRejection',
			type: 'string',
			default: '',
			description: 'Whether Reject (hangup) anonymous calls',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The dialplan name',
			displayOptions,
		},
		{
			displayName: 'Show Caller Number',
			name: 'showCallerNumber',
			type: 'string',
			default: '',
			description: 'The presented number when bridging calls',
			displayOptions,
		},
		{
			displayName: 'Transfer Timeout',
			name: 'transferTimeout',
			type: 'string',
			default: '',
			description: 'The timeout (in seconds) when bridging calls',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxDialplanPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const dialplanId = this.getNodeParameter('dialplanId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const anonymousRejection = this.getNodeParameter('anonymousRejection', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const showCallerNumber = this.getNodeParameter('showCallerNumber', _itemIndex) as string;
	const transferTimeout = this.getNodeParameter('transferTimeout', _itemIndex) as string;

	const body: IDataObject = {
		anonymousRejection: anonymousRejection,
		name: name,
		showCallerNumber: showCallerNumber,
		transferTimeout: transferTimeout,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan' + '/' + encodeURIComponent(dialplanId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
