import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change a redirection for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/redirection/{id}/changeRedirection
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Redirection ID',
			name: 'redirectionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the redirection to change',
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
			description: 'New target email address',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Redirection operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const redirectionId = this.getNodeParameter('redirectionId', 0) as string;
	const body: IDataObject = {
		localCopy: this.getNodeParameter('localCopy', 0) as boolean,
		to: this.getNodeParameter('to', 0) as string,
	};
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/redirection/${redirectionId}/changeRedirection`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
