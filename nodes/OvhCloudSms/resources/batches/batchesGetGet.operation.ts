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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/batches/{id} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/batches/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/batches/${encodeURIComponent(id)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
