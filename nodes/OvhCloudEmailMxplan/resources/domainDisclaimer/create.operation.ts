import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a domain disclaimer for an Email Mxplan service.
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/domain/{domainName}/disclaimer
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getEmailMxplanServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the domain',
			displayOptions,
		},
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			default: '',
			required: true,
			description: 'The disclaimer content',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Domain Disclaimer operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const body: IDataObject = {
		content: this.getNodeParameter('content', 0) as string,
	};
	const data = (await client.httpPost(`/email/mxplan/${service}/domain/${domainName}/disclaimer`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
