import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update a responder for an email domain.
 *
 * HTTP method: PUT
 * Endpoint: /email/domain/{domain}/responder/{account}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
			description: 'The account name of the responder to update',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Responder fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Responder operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const account = this.getNodeParameter('account', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/email/domain/${domainParam.value}/responder/${account}`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
