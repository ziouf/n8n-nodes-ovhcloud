import { SERVICE_NAME_2 } from '../../serviceName';
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
			...SERVICE_NAME_2,
			displayOptions,
		},
	];
}

/**
 * Executes the List Blacklist operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/blacklists
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpGet(`/sms/${serviceName}/blacklists`)) as string[];
	return this.helpers.returnJsonArray(data.map((p: string) => ({ phoneNumber: p })));
}
