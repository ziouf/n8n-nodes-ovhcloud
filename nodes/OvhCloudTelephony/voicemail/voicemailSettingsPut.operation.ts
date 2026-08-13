import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Audio Format',
			name: 'audioFormat',
			type: 'string',
			default: '',
			description: 'Format of the voicemail audio file attached to emails',
			displayOptions,
		},
		{
			displayName: 'Do Not Record',
			name: 'doNotRecord',
			type: 'string',
			default: '',
			description: 'Whether Don\'t allow callers to leave voicemails',
			displayOptions,
		},
		{
			displayName: 'Force Password',
			name: 'forcePassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Whether Force password request to access the voicemail panel',
			displayOptions,
		},
		{
			displayName: 'From Email',
			name: 'fromEmail',
			type: 'string',
			default: '',
			description: 'Email address from which emails will be sent',
			displayOptions,
		},
		{
			displayName: 'From Name',
			name: 'fromName',
			type: 'string',
			default: '',
			description: 'Name from which emails will be sent',
			displayOptions,
		},
		{
			displayName: 'Full Greeting Sound ID',
			name: 'fullGreetingSoundId',
			type: 'string',
			default: '',
			description: 'Sound ID of the long greeeting',
			displayOptions,
		},
		{
			displayName: 'Greeting Type',
			name: 'greetingType',
			type: 'string',
			default: '',
			description: 'Type of the greeting to play',
			displayOptions,
		},
		{
			displayName: 'Keep Message',
			name: 'keepMessage',
			type: 'string',
			default: '',
			description: 'Whether Don\'t delete voicemails after they\'ve been sent by email',
			displayOptions,
		},
		{
			displayName: 'Redirection Emails',
			name: 'redirectionEmails',
			type: 'string',
			default: '',
			description: 'Email addresses to notify when a new voicemail is left',
			displayOptions,
		},
		{
			displayName: 'Short Greeting Sound ID',
			name: 'shortGreetingSoundId',
			type: 'string',
			default: '',
			description: 'Sound ID of the short greeting played before an automated message',
			displayOptions,
		},
		{
			displayName: 'Temporary Greeting Activated',
			name: 'temporaryGreetingActivated',
			type: 'string',
			default: '',
			description: 'Whether Play the temporary greeting instead of the regular one',
			displayOptions,
		},
		{
			displayName: 'Temporary Greeting Sound ID',
			name: 'temporaryGreetingSoundId',
			type: 'string',
			default: '',
			description: 'Sound ID of the temporary greeeting',
			displayOptions,
		},
	];
}

/**
 * Executes the VoicemailSettingsPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/voicemail/{serviceName}/settings
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const audioFormat = this.getNodeParameter('audioFormat', _itemIndex) as string;
	const doNotRecord = this.getNodeParameter('doNotRecord', _itemIndex) as string;
	const forcePassword = this.getNodeParameter('forcePassword', _itemIndex) as string;
	const fromEmail = this.getNodeParameter('fromEmail', _itemIndex) as string;
	const fromName = this.getNodeParameter('fromName', _itemIndex) as string;
	const fullGreetingSoundId = this.getNodeParameter('fullGreetingSoundId', _itemIndex) as string;
	const greetingType = this.getNodeParameter('greetingType', _itemIndex) as string;
	const keepMessage = this.getNodeParameter('keepMessage', _itemIndex) as string;
	const redirectionEmails = this.getNodeParameter('redirectionEmails', _itemIndex) as string;
	const shortGreetingSoundId = this.getNodeParameter('shortGreetingSoundId', _itemIndex) as string;
	const temporaryGreetingActivated = this.getNodeParameter('temporaryGreetingActivated', _itemIndex) as string;
	const temporaryGreetingSoundId = this.getNodeParameter('temporaryGreetingSoundId', _itemIndex) as string;

	const body: IDataObject = {
		audioFormat: audioFormat,
		doNotRecord: doNotRecord,
		forcePassword: forcePassword,
		fromEmail: fromEmail,
		fromName: fromName,
		fullGreetingSoundId: fullGreetingSoundId,
		greetingType: greetingType,
		keepMessage: keepMessage,
		redirectionEmails: redirectionEmails,
		shortGreetingSoundId: shortGreetingSoundId,
		temporaryGreetingActivated: temporaryGreetingActivated,
		temporaryGreetingSoundId: temporaryGreetingSoundId,
	};

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/voicemail' + '/' + encodeURIComponent(serviceName) + '/settings', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
