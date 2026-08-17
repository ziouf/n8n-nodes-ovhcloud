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
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete /sms/{serviceName}/batches/{id} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/batches/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const data = (await getClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/batches/${encodeURIComponent(id)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
