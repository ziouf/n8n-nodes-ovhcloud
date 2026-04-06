import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a public folder for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/publicFolder
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'The path of the public folder',
			displayOptions,
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'number',
			default: 0,
			required: true,
			description: 'The quota for the public folder',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Mailbox', value: 'mailbox' },
				{ name: 'Public Folder', value: 'publicFolder' },
			],
			default: 'publicFolder',
			required: true,
			description: 'The type of public folder',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Public Folder operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const quota = this.getNodeParameter('quota', 0) as number;
	const type = this.getNodeParameter('type', 0) as string;

	const body: IDataObject = { path, quota, type };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/publicFolder`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
