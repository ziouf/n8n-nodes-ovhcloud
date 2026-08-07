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
					emailDomainOperation: ['DomainMailingListModeratorDelete'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			required: true,
			description: 'The email parameter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListModeratorDelete'],
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
			description: 'Name of mailing list',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListModeratorDelete'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Delete existing moderator
 *
 * HTTP method: DELETE
 * Endpoint: /email/domain/{domain}/mailingList/{name}/moderator/{email}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain/' + encodeURIComponent(domain) + '/mailingList/' + encodeURIComponent(name) + '/moderator/' + encodeURIComponent(email))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
