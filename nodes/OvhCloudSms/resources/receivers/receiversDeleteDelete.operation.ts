import type {
	IDataObject,
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
 * Executes the Delete /sms/{serviceName}/receivers/{slotId} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/receivers/{slotId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const slotId = this.getNodeParameter('slotId', _itemIndex ?? 0) as number;
	const data = (await new ApiClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/receivers/${slotId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
