import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const slotId = this.getNodeParameter('slotId', 0) as number;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/receivers/${slotId}/csv`,
	)) as string;
	return this.helpers.returnJsonArray([{ value: data }]);
}
