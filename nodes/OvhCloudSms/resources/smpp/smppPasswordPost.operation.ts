import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
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
 * Executes the Post /sms/{serviceName}/smpp/password operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/smpp/password
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/smpp/password`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
