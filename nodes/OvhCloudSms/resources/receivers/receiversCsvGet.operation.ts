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
		{
			displayName: 'Slot ID',
			name: 'slotId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Slot number ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/receivers/{slotId}/csv operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/receivers/{slotId}/csv
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const slotId = this.getNodeParameter('slotId', _itemIndex ?? 0) as number;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/receivers/${slotId}/csv`,
	)) as string;
	return this.helpers.returnJsonArray([{ value: data }]);
}
