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
					emailDomainOperation: ['DomainMailingListChangeOptionsCreate'],
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
					emailDomainOperation: ['DomainMailingListChangeOptionsCreate'],
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
					emailDomainOperation: ['DomainMailingListChangeOptionsCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change mailing list options
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/mailingList/{name}/changeOptions
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const options = this.getNodeParameter('options', 0) as any;

	const body: IDataObject = {
		options: options,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/mailingList/' + encodeURIComponent(name) + '/changeOptions', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
