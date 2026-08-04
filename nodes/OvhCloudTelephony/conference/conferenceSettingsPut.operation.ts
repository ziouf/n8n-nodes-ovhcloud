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
			displayName: 'Announce File',
			name: 'announceFile',
			type: 'string',
			default: '',
			description: 'Whether announce file is played before entrance',
			displayOptions,
		},
		{
			displayName: 'Announce Sound ID',
			name: 'announceSoundId',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Anonymous Rejection',
			name: 'anonymousRejection',
			type: 'string',
			default: '',
			description: 'Whether anonymous participants are allowed',
			displayOptions,
		},
		{
			displayName: 'Enter Muted',
			name: 'enterMuted',
			type: 'string',
			default: '',
			description: 'Whether participants enter conference room muted',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			description: 'The conference sounds language',
			displayOptions,
		},
		{
			displayName: 'Pin',
			name: 'pin',
			type: 'string',
			default: '',
			description: 'The conference pin number',
			displayOptions,
		},
		{
			displayName: 'Record Status',
			name: 'recordStatus',
			type: 'string',
			default: '',
			description: 'Whether conference is recorded',
			displayOptions,
		},
		{
			displayName: 'Report Email',
			name: 'reportEmail',
			type: 'string',
			default: '',
			description: 'The email address to send conference report to',
			displayOptions,
		},
		{
			displayName: 'Report Status',
			name: 'reportStatus',
			type: 'string',
			default: '',
			description: 'The status of the reporting',
			displayOptions,
		},
		{
			displayName: 'White Label Report',
			name: 'whiteLabelReport',
			type: 'string',
			default: '',
			description: 'Whether True if you want to receive a white-labelled mail report of your conference',
			displayOptions,
		},
	];
}

/**
 * Executes the ConferenceSettingsPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/conference/{serviceName}/settings
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const announceFile = this.getNodeParameter('announceFile', itemIndex) as string;
	const announceSoundId = this.getNodeParameter('announceSoundId', itemIndex) as string;
	const anonymousRejection = this.getNodeParameter('anonymousRejection', itemIndex) as string;
	const enterMuted = this.getNodeParameter('enterMuted', itemIndex) as string;
	const language = this.getNodeParameter('language', itemIndex) as string;
	const pin = this.getNodeParameter('pin', itemIndex) as string;
	const recordStatus = this.getNodeParameter('recordStatus', itemIndex) as string;
	const reportEmail = this.getNodeParameter('reportEmail', itemIndex) as string;
	const reportStatus = this.getNodeParameter('reportStatus', itemIndex) as string;
	const whiteLabelReport = this.getNodeParameter('whiteLabelReport', itemIndex) as string;

	const body: IDataObject = {
		announceFile: announceFile,
		announceSoundId: announceSoundId,
		anonymousRejection: anonymousRejection,
		enterMuted: enterMuted,
		language: language,
		pin: pin,
		recordStatus: recordStatus,
		reportEmail: reportEmail,
		reportStatus: reportStatus,
		whiteLabelReport: whiteLabelReport,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/conference' + '/' + encodeURIComponent(serviceName) + '/settings', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
