import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update flags on all accounts for an Email Mxplan service.
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/updateFlagsOnAllAccounts
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Update Flags On All Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const data = (await client.httpPost(
		`/email/mxplan/${service}/updateFlagsOnAllAccounts`,
	)) as IDataObject;
	return [{ json: data }];
}
