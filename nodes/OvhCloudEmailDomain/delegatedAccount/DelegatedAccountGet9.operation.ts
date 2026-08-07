import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			required: true,
			description: 'Email',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountGet9'],
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
					emailDomainOperation: ['DelegatedAccountGet9'],
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
			description: 'If true, emails will be copy to emailToCopy address',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountGet9'],
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
					emailDomainOperation: ['DelegatedAccountGet9'],
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
					emailDomainOperation: ['DelegatedAccountGet9'],
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
					emailDomainOperation: ['DelegatedAccountGet9'],
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
 * Endpoint: /email/domain/delegatedAccount/{email}/responder
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const content = this.getNodeParameter('content', 0) as string;
	const copy = this.getNodeParameter('copy', 0) as any;
	const copyTo = this.getNodeParameter('copyTo', 0) as string;
	const from = this.getNodeParameter('from', 0) as string;
	const to = this.getNodeParameter('to', 0) as string;

	const body: IDataObject = {
		content: content,
		copy: copy,
		copyTo: copyTo,
		from: from,
		to: to,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/responder', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
