import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an ACL for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/acl
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The account ID to add to the ACL',
			displayOptions,
		},
	];
}

/**
 * Executes the Create ACL operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountId = this.getNodeParameter('accountId', 0) as number;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/acl`,
		{ accountId },
	)) as IDataObject;
	return [{ json: data }];
}
