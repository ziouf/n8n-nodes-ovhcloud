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
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the object',
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete /sms/{serviceName}/jobs/{id} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/jobs/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/jobs/${id}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
