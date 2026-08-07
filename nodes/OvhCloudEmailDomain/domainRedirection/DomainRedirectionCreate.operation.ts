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
					emailDomainOperation: ['DomainRedirectionCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new redirection in server
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/redirection
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;

	const body: IDataObject = {
		undefined: undefined,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/redirection', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
