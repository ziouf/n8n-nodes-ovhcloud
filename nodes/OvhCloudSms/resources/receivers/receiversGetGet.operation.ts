import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
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
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/receivers/{slotId} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/receivers/{slotId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const slotId = this.getNodeParameter('slotId', 0) as number;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/receivers/${slotId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
