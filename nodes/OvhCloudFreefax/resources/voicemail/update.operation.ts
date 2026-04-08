import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update Freefax Voicemail operation.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}/voicemail
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getFreefaxServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Audio Format',
			name: 'audioFormat',
			type: 'options',
			default: 'aiff',
			options: [
				{ name: 'AIFF', value: 'aiff' },
				{ name: 'AU', value: 'au' },
				{ name: 'FLAC', value: 'flac' },
				{ name: 'MP3', value: 'mp3' },
				{ name: 'OGG', value: 'ogg' },
				{ name: 'WAV', value: 'wav' },
			],
			description: 'Audio format for voicemail messages',
			displayOptions,
		},
		{
			displayName: 'Do Not Record',
			name: 'doNotRecord',
			type: 'boolean',
			default: false,
			description: 'Whether to disable recording',
			displayOptions,
		},
		{
			displayName: 'Force Password',
			name: 'forcePassword',
			type: 'boolean',
			default: false,
			description: 'Whether to require a password to access voicemail',
			displayOptions,
		},
		{
			displayName: 'From Email',
			name: 'fromEmail',
			type: 'string',
			default: '',
			description: 'Email address used as sender for notifications',
			displayOptions,
		},
		{
			displayName: 'From Name',
			name: 'fromName',
			type: 'string',
			default: '',
			description: 'Name used as sender for notifications',
			displayOptions,
		},
		{
			displayName: 'Greeting Type',
			name: 'greetingType',
			type: 'options',
			default: 'default',
			options: [
				{ name: 'Default', value: 'default' },
				{ name: 'Full', value: 'full' },
				{ name: 'Short', value: 'short' },
			],
			description: 'Type of greeting message',
			displayOptions,
		},
		{
			displayName: 'Keep Message',
			name: 'keepMessage',
			type: 'boolean',
			default: false,
			description: 'Whether to keep messages after listening',
			displayOptions,
		},
		{
			displayName: 'Temporary Greeting Activated',
			name: 'temporaryGreetingActivated',
			type: 'boolean',
			default: false,
			description: 'Whether the temporary greeting is activated',
			displayOptions,
		},
		{
			displayName: 'Redirection Emails',
			name: 'redirectionEmails',
			type: 'fixedCollection',
			default: {},
			typeOptions: {
				multipleValues: true,
			},
			description: 'Email addresses for voicemail redirection',
			displayOptions,
			options: [
				{
					displayName: 'Email Entry',
					name: 'emailEntry',
					values: [
						{
							displayName: 'Email',
							name: 'email',
							type: 'string',
							placeholder: 'name@email.com',
							default: '',
							description: 'Email address',
						},
						{
							displayName: 'Type',
							name: 'type',
							type: 'string',
							default: '',
							description: 'Type of redirection',
						},
					],
				},
			],
		},
	];
}

/**
 * Executes the Update Freefax Voicemail operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const body: IDataObject = {};

	const audioFormat = this.getNodeParameter('audioFormat', 0, '') as string;
	const doNotRecord = this.getNodeParameter('doNotRecord', 0, false) as boolean;
	const forcePassword = this.getNodeParameter('forcePassword', 0, false) as boolean;
	const fromEmail = this.getNodeParameter('fromEmail', 0, '') as string;
	const fromName = this.getNodeParameter('fromName', 0, '') as string;
	const greetingType = this.getNodeParameter('greetingType', 0, '') as string;
	const keepMessage = this.getNodeParameter('keepMessage', 0, false) as boolean;
	const temporaryGreetingActivated = this.getNodeParameter(
		'temporaryGreetingActivated',
		0,
		false,
	) as boolean;

	if (audioFormat) body.audioFormat = audioFormat;
	if (doNotRecord !== undefined) body.doNotRecord = doNotRecord;
	if (forcePassword !== undefined) body.forcePassword = forcePassword;
	if (fromEmail) body.fromEmail = fromEmail;
	if (fromName) body.fromName = fromName;
	if (greetingType) body.greetingType = greetingType;
	if (keepMessage !== undefined) body.keepMessage = keepMessage;
	if (temporaryGreetingActivated !== undefined)
		body.temporaryGreetingActivated = temporaryGreetingActivated;

	const redirectionEmails = this.getNodeParameter('redirectionEmails', 0, {}) as IDataObject;
	if (redirectionEmails && redirectionEmails.emailEntry) {
		body.redirectionEmails = redirectionEmails.emailEntry;
	}

	const data = (await client.httpPut(`/freefax/${serviceName}/voicemail`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
