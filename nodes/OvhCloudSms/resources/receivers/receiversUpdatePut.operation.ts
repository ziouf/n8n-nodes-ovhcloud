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
		},
		{
			displayName: 'Auto Update',
			name: 'autoUpdate',
			type: 'boolean',
			default: false,
			description: 'Whether Property of sms.Receiver',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.Receiver',
			displayOptions,
		}
	];
}

/**
 * Executes the Put /sms/{serviceName}/receivers/{slotId} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/receivers/{slotId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const slotId = this.getNodeParameter('slotId', 0) as number;
	const body: IDataObject = {};
	const autoUpdate = this.getNodeParameter('autoUpdate', 0) as boolean;
	if (autoUpdate) body['autoUpdate'] = autoUpdate;
	const description = this.getNodeParameter('description', 0) as string;
	if (description) body['description'] = description;
	const data = (await new ApiClient(this).httpPut(`/sms/${encodeURIComponent(serviceName)}/receivers/${slotId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
