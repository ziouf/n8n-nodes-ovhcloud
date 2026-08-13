import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const language = this.getNodeParameter('language', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const options = this.getNodeParameter('options', _itemIndex ?? 0) as IDataObject;
	const ownerEmail = this.getNodeParameter('ownerEmail', _itemIndex ?? 0) as string;
	const replyTo = this.getNodeParameter('replyTo', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		language,
		name,
		options,
		ownerEmail,
		replyTo,
	};

	const client = getClient(this);
	const data = (await client.httpPost(
		'/email' + '/domain/' + encodeURIComponent(domain) + '/mailingList',
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
