import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update service information for an email domain.
 *
 * HTTP method: PUT
 * Endpoint: /email/domain/{domain}/serviceInfos
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Service info fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Service Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/email/domain/${domainParam.value}/serviceInfos`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
