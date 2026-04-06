import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get account diagnostic for an Email Mxplan service.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/account/{email}/diagnostic
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Account Diagnostic operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const email = this.getNodeParameter('email', 0) as string;
	const data = (await client.httpGet(
		`/email/mxplan/${service}/account/${email}/diagnostic`,
	)) as IDataObject;
	return [{ json: data }];
}
