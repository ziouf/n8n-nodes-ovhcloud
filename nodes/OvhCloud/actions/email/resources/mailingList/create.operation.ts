import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a mailing list for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/mailingList
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Language',
			name: 'language',
			type: 'options',
			options: [
				{ name: 'Dutch', value: 'nl' },
				{ name: 'English', value: 'en' },
				{ name: 'French', value: 'fr' },
				{ name: 'German', value: 'de' },
				{ name: 'Italian', value: 'it' },
				{ name: 'Polish', value: 'pl' },
				{ name: 'Portuguese', value: 'pt' },
				{ name: 'Spanish', value: 'es' },
			],
			default: 'en',
			required: true,
			description: 'Language of the mailing list',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the mailing list',
			displayOptions,
		},
		{
			displayName: 'Options',
			name: 'options',
			type: 'options',
			options: [
				{ name: 'Moderated', value: 'moderated' },
				{ name: 'Non Moderated', value: 'non_moderated' },
				{ name: 'Public', value: 'public' },
				{ name: 'Private', value: 'private' },
			],
			default: 'public',
			required: true,
			description: 'Mailing list options',
			displayOptions,
		},
		{
			displayName: 'Owner Email',
			name: 'ownerEmail',
			type: 'string',
			default: '',
			required: true,
			description: 'Email of the mailing list owner',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Mailing List operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const body: IDataObject = {
		language: this.getNodeParameter('language', 0),
		name: this.getNodeParameter('name', 0),
		options: this.getNodeParameter('options', 0),
		ownerEmail: this.getNodeParameter('ownerEmail', 0),
	};
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/mailingList`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
