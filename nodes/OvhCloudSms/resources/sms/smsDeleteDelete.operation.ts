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
 * Executes the Delete SMS operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	await getClient(this).httpDelete(`/sms/${serviceName}`);
	return this.helpers.returnJsonArray([{ serviceName, deleted: true }]);
}
