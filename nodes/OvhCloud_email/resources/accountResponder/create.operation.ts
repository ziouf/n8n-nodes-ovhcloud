import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create an account responder.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/responder
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the email account',
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
			displayName: 'End',
			name: 'end',
			type: 'dateTime',
			default: '',
			description: 'End date for the auto-responder',
			displayOptions,
		},
		{
			displayName: 'Start',
			name: 'start',
			type: 'dateTime',
			default: '',
			description: 'Start date for the auto-responder',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Responder operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const body: IDataObject = {
		content: this.getNodeParameter('content', 0) as string,
	};
	const end = this.getNodeParameter('end', 0, '') as string;
	const start = this.getNodeParameter('start', 0, '') as string;
	if (end) body.end = end;
	if (start) body.start = start;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account/${accountName}/responder`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
