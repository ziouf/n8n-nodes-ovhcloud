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
			description: 'Whether Reject (hangup) anonymous calls',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the service',
			displayOptions,
		},
		{
			displayName: 'Max Wait Time',
			name: 'maxWaitTime',
			type: 'string',
			default: '',
			description: 'Max wait time when caller is in queue (in seconds)',
			displayOptions,
		},
		{
			displayName: 'Queue Size',
			name: 'queueSize',
			type: 'string',
			default: '',
			description: 'Max number of callers in queue',
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
			displayName: 'Status Ivr Enabled',
			name: 'statusIvrEnabled',
			type: 'string',
			default: '',
			description: 'Whether Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default.',
			displayOptions,
		},
		{
			displayName: 'Strategy',
			name: 'strategy',
			type: 'string',
			default: '',
			description: 'The calls dispatching strategy',
			displayOptions,
		},
		{
			displayName: 'Tone On Closing',
			name: 'toneOnClosing',
			type: 'string',
			default: '',
			description: 'Tone played just before call is hang up',
			displayOptions,
		},
		{
			displayName: 'Tone On Hold',
			name: 'toneOnHold',
			type: 'string',
			default: '',
			description: 'Tone played when caller is put on hold',
			displayOptions,
		},
		{
			displayName: 'Tone On Opening',
			name: 'toneOnOpening',
			type: 'string',
			default: '',
			description: 'Tone played when call is picked up',
			displayOptions,
		},
		{
			displayName: 'Voicemail',
			name: 'voicemail',
			type: 'string',
			default: '',
			description: 'The voicemail used by the EasyPABX',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const anonymousRejection = this.getNodeParameter('anonymousRejection', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const maxWaitTime = this.getNodeParameter('maxWaitTime', _itemIndex) as string;
	const queueSize = this.getNodeParameter('queueSize', _itemIndex) as string;
	const showCallerNumber = this.getNodeParameter('showCallerNumber', _itemIndex) as string;
	const statusIvrEnabled = this.getNodeParameter('statusIvrEnabled', _itemIndex) as string;
	const strategy = this.getNodeParameter('strategy', _itemIndex) as string;
	const toneOnClosing = this.getNodeParameter('toneOnClosing', _itemIndex) as string;
	const toneOnHold = this.getNodeParameter('toneOnHold', _itemIndex) as string;
	const toneOnOpening = this.getNodeParameter('toneOnOpening', _itemIndex) as string;
	const voicemail = this.getNodeParameter('voicemail', _itemIndex) as string;

	const body: IDataObject = {
		anonymousRejection: anonymousRejection,
		description: description,
		maxWaitTime: maxWaitTime,
		queueSize: queueSize,
		showCallerNumber: showCallerNumber,
		statusIvrEnabled: statusIvrEnabled,
		strategy: strategy,
		toneOnClosing: toneOnClosing,
		toneOnHold: toneOnHold,
		toneOnOpening: toneOnOpening,
		voicemail: voicemail,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
