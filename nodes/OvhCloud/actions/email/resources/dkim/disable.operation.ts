import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Disable DKIM for an email domain.
 *
 * HTTP method: PUT
 * Endpoint: /email/domain/{domain}/dkim/disable
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Disable DKIM operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const data = (await client.httpPut(
		`/email/domain/${domainParam.value}/dkim/disable`,
	)) as IDataObject;
	return [{ json: data }];
}
