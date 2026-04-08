import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete an export for an Email Exchange account.
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/export/{id}
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
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The primary email address of the account',
			displayOptions,
		},
		{
			displayName: 'Export ID',
			name: 'exportId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the export',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Account Export operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const exportId = this.getNodeParameter('exportId', 0) as number;

	const data = (await client.httpDelete(
		`/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export/${exportId}`,
	)) as IDataObject;
	return [{ json: data }];
}
