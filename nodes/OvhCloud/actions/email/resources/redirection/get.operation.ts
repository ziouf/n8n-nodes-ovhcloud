import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a redirection for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/redirection/{id}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Redirection ID',
			name: 'redirectionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the redirection',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Redirection operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const redirectionId = this.getNodeParameter('redirectionId', 0) as string;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/redirection/${redirectionId}`,
	)) as IDataObject;
	return [{ json: data }];
}
