import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Create Domain Disclaimer operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getEmailProServices',
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
			description: 'Name of the domain',
			displayOptions,
		},
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			typeOptions: { rows: 4 },
			default: '',
			required: true,
			description: 'Disclaimer content',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Domain Disclaimer operation.
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/domain/{domainName}/disclaimer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const content = this.getNodeParameter('content', 0) as string;

	const body: IDataObject = { content };

	const data = (await client.httpPost(
		`/email/pro/${serviceName}/domain/${domainName}/disclaimer`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
