import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get recommended DNS records for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/recommendedDNSRecords
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Recommended DNS Records operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/recommendedDNSRecords`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
