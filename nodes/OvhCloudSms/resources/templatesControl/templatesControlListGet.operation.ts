import { SERVICE_NAME } from '../../serviceName';
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/templatesControl operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/templatesControl
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/templatesControl`,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((v: string) => ({ name: v })));
}
