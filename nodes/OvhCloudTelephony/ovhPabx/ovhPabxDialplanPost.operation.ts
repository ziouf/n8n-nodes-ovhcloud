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
			displayName: 'Anonymous Rejection',
			name: 'anonymousRejection',
			type: 'string',
			default: '',
			required: true,
			description: 'Whether Reject (hangup) anonymous calls',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The dialplan name',
			displayOptions,
		},
		{
			displayName: 'Show Caller Number',
			name: 'showCallerNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'The presented number when bridging calls',
			displayOptions,
		},
		{
			displayName: 'Transfer Timeout',
			name: 'transferTimeout',
			type: 'string',
			default: '',
			required: true,
			description: 'The timeout (in seconds) when bridging calls',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxDialplanPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
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
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
