import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a redirection for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/redirection
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			required: true,
			description: 'Source email address',
			displayOptions,
		},
		{
			displayName: 'Local Copy',
			name: 'localCopy',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to keep a local copy of the email',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			required: true,
			description: 'Target email address',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Redirection operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const body: IDataObject = {
		from: this.getNodeParameter('from', 0) as string,
		localCopy: this.getNodeParameter('localCopy', 0) as boolean,
		to: this.getNodeParameter('to', 0) as string,
	};
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/redirection`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
