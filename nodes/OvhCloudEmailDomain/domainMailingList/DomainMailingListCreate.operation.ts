import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			required: true,
			description: 'Language of mailing list',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Mailing list name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Options',
			name: 'options',
			type: 'string',
			default: '',
			required: true,
			description: 'Options of mailing list',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Owner Email',
			name: 'ownerEmail',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Reply To',
			name: 'replyTo',
			type: 'string',
			default: '',
			description: 'Email to reply of mailing list',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new mailingList
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/mailingList
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const language = this.getNodeParameter('language', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const options = this.getNodeParameter('options', 0) as IDataObject;
	const ownerEmail = this.getNodeParameter('ownerEmail', 0) as string;
	const replyTo = this.getNodeParameter('replyTo', 0) as string;

	const body: IDataObject = {
		language,
		name,
		options,
		ownerEmail,
		replyTo,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost(
		'/email' + '/domain/' + encodeURIComponent(domain) + '/mailingList',
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
