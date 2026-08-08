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
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete /sms/{serviceName}/outgoing/{id} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/outgoing/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', 0) as number;
	const data = (await new ApiClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/outgoing/${id}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
