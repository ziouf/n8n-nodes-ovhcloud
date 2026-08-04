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
			displayName: 'Receiver',
			name: 'receiver',
			type: 'string',
			default: '',
			required: true,
			description: 'The receiver number to check',
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/exceptions operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/exceptions
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const receiver = this.getNodeParameter('receiver', 0) as string;
	const qs: IDataObject = {};
	qs['receiver'] = receiver;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/exceptions`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data as IDataObject[]);
}
