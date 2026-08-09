import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

const VOICEMAIL_STRING_FIELDS = ['fromEmail', 'fromName'];
const VOICEMAIL_NUMBER_FIELDS = [
	'fullGreetingSoundId',
	'shortGreetingSoundId',
	'temporaryGreetingSoundId',
	'unreadMessages',
];
const VOICEMAIL_BOOLEAN_FIELDS = [
	'doNotRecord',
	'forcePassword',
	'keepMessage',
	'temporaryGreetingActivated',
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Freefax Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Freefax line account service name (e.g. fr12345-ovh)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getFreefaxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'fr12345-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Audio Format',
			name: 'audioFormat',
			type: 'options',
			default: 'wav',
			options: [
				{ name: 'AIFF', value: 'aiff' },
				{ name: 'AU', value: 'au' },
				{ name: 'FLAC', value: 'flac' },
				{ name: 'MP3', value: 'mp3' },
				{ name: 'OGG', value: 'ogg' },
				{ name: 'WAV', value: 'wav' },
			],
			description: 'Voicemail audio format',
			displayOptions,
		},
		{
			displayName: 'Do Not Record',
			name: 'doNotRecord',
			type: 'boolean',
			default: false,
			description: 'Whether to prevent callers from leaving voicemails',
			displayOptions,
		},
		{
			displayName: 'Force Password',
			name: 'forcePassword',
			type: 'boolean',
			default: false,
			description: 'Whether to force a password request to access the voicemail panel',
			displayOptions,
		},
		{
			displayName: 'From Email',
			name: 'fromEmail',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address from which voicemail notifications will be sent',
			displayOptions,
		},
		{
			displayName: 'From Name',
			name: 'fromName',
			type: 'string',
			default: '',
			description: 'Name from which voicemail notifications will be sent',
			displayOptions,
		},
		{
			displayName: 'Full Greeting Sound ID',
			name: 'fullGreetingSoundId',
			type: 'number',
			default: 0,
			description: 'Sound ID of the full greeting',
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
			displayOptions,
		},
		{
			displayName: 'Keep Message',
			name: 'keepMessage',
			type: 'boolean',
			default: false,
			description: 'Whether to keep voicemails after they have been sent by email',
			displayOptions,
		},
		{
			displayName: 'Short Greeting Sound ID',
			name: 'shortGreetingSoundId',
			type: 'number',
			default: 0,
			description: 'Sound ID of the short greeting',
			displayOptions,
		},
		{
			displayName: 'Temporary Greeting Activated',
			name: 'temporaryGreetingActivated',
			type: 'boolean',
			default: false,
			description: 'Whether to play the temporary greeting instead of the regular one',
			displayOptions,
		},
		{
			displayName: 'Temporary Greeting Sound ID',
			name: 'temporaryGreetingSoundId',
			type: 'number',
			default: 0,
			description: 'Sound ID of the temporary greeting',
			displayOptions,
		},
		{
			displayName: 'Unread Messages',
			name: 'unreadMessages',
			type: 'number',
			default: 0,
			description: 'Number of unread voicemails',
			displayOptions,
		},
	];
}

/**
 * Modify voicemail properties for a specific Freefax line account.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}/voicemail
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	for (const field of VOICEMAIL_STRING_FIELDS) {
		const value = (this.getNodeParameter(field, 0, '') as string) || '';
		if (value) body[field] = value;
	}

	const audioFormat = (this.getNodeParameter('audioFormat', _itemIndex ?? 0, '') as string) || '';
	if (audioFormat) body.audioFormat = audioFormat;

	const greetingType = (this.getNodeParameter('greetingType', _itemIndex ?? 0, '') as string) || '';
	if (greetingType) body.greetingType = greetingType;

	for (const field of VOICEMAIL_NUMBER_FIELDS) {
		const value = this.getNodeParameter(field, 0) as number | undefined;
		if (value !== undefined) body[field] = value;
	}

	for (const field of VOICEMAIL_BOOLEAN_FIELDS) {
		const value = this.getNodeParameter(field, 0) as boolean | undefined;
		if (value !== undefined) body[field] = value;
	}

	await client.httpPut(`/freefax/${encodeURIComponent(serviceName)}/voicemail`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
