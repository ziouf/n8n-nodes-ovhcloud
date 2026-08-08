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
				description: 'The SMS service name',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The task identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get SMS Task operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${serviceName}/task/${taskId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
