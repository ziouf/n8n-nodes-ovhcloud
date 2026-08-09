import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Fax Max Call',
			name: 'faxMaxCall',
			type: 'number',
			default: 3,
			required: true,
			description: 'Number of tries when sending a fax',
			displayOptions,
		},
		{
			displayName: 'Fax Quality',
			name: 'faxQuality',
			type: 'options',
			default: 'best',
			options: [
				{ name: 'Best', value: 'best' },
				{ name: 'Normal', value: 'normal' },
			],
			description: 'Available quality for fax documents',
			displayOptions,
		},
		{
			displayName: 'Fax Tag Line',
			name: 'faxTagLine',
			type: 'string',
			default: '',
			description: 'Customised Freefax header',
			displayOptions,
		},
		{
			displayName: 'From Email',
			name: 'fromEmail',
			type: 'string',
			default: '',
			description: 'FROM email header',
			displayOptions,
		},
		{
			displayName: 'From Name',
			name: 'fromName',
			type: 'string',
			default: '',
			description: 'Name of the sender of the email',
			displayOptions,
		},
		{
			displayName: 'Redirection Email',
			name: 'redirectionEmail',
			type: 'string',
			default: '',
			description: 'Comma-separated email addresses to redirect fax response',
			displayOptions,
		},
	];
}

/**
 * Edit the properties of a Freefax line account.
 *
 * HTTP method: PUT
 * Endpoint: /freefax/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const faxMaxCall = (this.getNodeParameter('faxMaxCall', _itemIndex ?? 0, 3) as number) ?? 3;

	const body: IDataObject = { faxMaxCall };

	const faxQuality = (this.getNodeParameter('faxQuality', _itemIndex ?? 0, '') as string) || '';
	if (faxQuality) body.faxQuality = faxQuality;

	const faxTagLine = (this.getNodeParameter('faxTagLine', _itemIndex ?? 0, '') as string) || '';
	if (faxTagLine) body.faxTagLine = faxTagLine;

	const fromEmail = (this.getNodeParameter('fromEmail', _itemIndex ?? 0, '') as string) || '';
	if (fromEmail) body.fromEmail = fromEmail;

	const fromName = (this.getNodeParameter('fromName', _itemIndex ?? 0, '') as string) || '';
	if (fromName) body.fromName = fromName;

	const redirectionEmail = (this.getNodeParameter('redirectionEmail', _itemIndex ?? 0, '') as string) || '';
	if (redirectionEmail) {
		body.redirectionEmail = redirectionEmail
			.split(',')
			.map((email) => email.trim())
			.filter(Boolean);
	}

	await client.httpPut(`/freefax/${encodeURIComponent(serviceName)}`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
