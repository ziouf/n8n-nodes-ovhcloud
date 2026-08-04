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
			displayName: 'Freemium',
			name: 'freemium',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether Limit checks to syntaxical validation',
			displayOptions,
		},
		{
			displayName: 'Price Only',
			name: 'priceOnly',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether Only get action\'s price in credits without executing it',
			displayOptions,
		}
	];
}

/**
 * Executes the Post /sms/{serviceName}/receivers/{slotId}/clean operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/receivers/{slotId}/clean
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const slotId = this.getNodeParameter('slotId', 0) as number;
	const freemium = this.getNodeParameter('freemium', 0) as boolean;
	const priceOnly = this.getNodeParameter('priceOnly', 0) as boolean;
	const body: IDataObject = {};
	body['freemium'] = freemium;
	body['priceOnly'] = priceOnly;
	const data = (await new ApiClient(this).httpPost(`/sms/${encodeURIComponent(serviceName)}/receivers/${slotId}/clean`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
