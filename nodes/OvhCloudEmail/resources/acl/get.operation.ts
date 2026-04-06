import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get an ACL for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/acl/{accountId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The account ID of the ACL',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ACL operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountId = this.getNodeParameter('accountId', 0) as number;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/acl/${accountId}`,
	)) as IDataObject;
	return [{ json: data }];
}
