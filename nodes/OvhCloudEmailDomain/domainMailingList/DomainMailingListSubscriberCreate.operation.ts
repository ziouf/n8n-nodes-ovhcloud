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
					emailDomainOperation: ['DomainMailingListSubscriberCreate'],
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
					emailDomainOperation: ['DomainMailingListSubscriberCreate'],
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
			description: 'Email of subscriber',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMailingListSubscriberCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Add subscriber to mailing list
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/mailingList/{name}/subscriber
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;

	const body: IDataObject = {
		email: email,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/mailingList/' + encodeURIComponent(name) + '/subscriber', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
