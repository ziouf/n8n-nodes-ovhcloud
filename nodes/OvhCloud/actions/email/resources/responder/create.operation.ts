import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a responder for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/responder
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
			description: 'The account name for the responder',
			displayOptions,
		},
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			default: '',
			required: true,
			description: 'Content of the auto-responder',
			displayOptions,
		},
		{
			displayName: 'Copy',
			name: 'copy',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to keep a copy of the email',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Responder operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const body: IDataObject = {
		account: this.getNodeParameter('account', 0) as string,
		content: this.getNodeParameter('content', 0) as string,
		copy: this.getNodeParameter('copy', 0) as boolean,
	};
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/responder`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
