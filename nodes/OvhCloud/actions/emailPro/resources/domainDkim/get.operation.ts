import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Get Domain DKIM operation.
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
			displayName: 'Selector Name',
			name: 'selectorName',
			type: 'string',
			default: '',
			required: true,
			description: 'DKIM selector name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Domain DKIM operation.
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const selectorName = this.getNodeParameter('selectorName', 0) as string;
	const data = (await client.httpGet(
		`/email/pro/${serviceName}/domain/${domainName}/dkim/${selectorName}`,
	)) as IDataObject;
	return [{ json: data }];
}
