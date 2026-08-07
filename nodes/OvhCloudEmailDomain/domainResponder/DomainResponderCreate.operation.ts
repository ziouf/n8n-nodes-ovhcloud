import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
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
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
			description: 'Account of domain',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			default: '',
			required: true,
			description: 'Content of responder',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Copy',
			name: 'copy',
			type: 'string',
			default: '',
			required: true,
			description: 'If false, emails will be dropped. If true and copyTo field is empty, emails will be delivered to your mailbox. If true and copyTo is set with an address, emails will be delivered to this address',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Copy To',
			name: 'copyTo',
			type: 'string',
			default: '',
			description: 'Account where copy emails',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Date of start responder',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			description: 'Date of end responder',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new responder in server
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/responder
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const account = this.getNodeParameter('account', 0) as string;
	const content = this.getNodeParameter('content', 0) as string;
	const copy = this.getNodeParameter('copy', 0) as string;
	const copyTo = this.getNodeParameter('copyTo', 0) as string;
	const from = this.getNodeParameter('from', 0) as string;
	const to = this.getNodeParameter('to', 0) as string;

	const body: IDataObject = {
		account: account,
		content: content,
		copy: copy,
		copyTo: copyTo,
		from: from,
		to: to,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/responder', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
