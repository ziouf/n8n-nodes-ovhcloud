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
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete /sms/{serviceName}/outgoing/{id} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/outgoing/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;
	const data = (await getClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/outgoing/${id}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
