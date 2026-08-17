import { SERVICE_NAME_2 } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The task',
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex ?? 0) as string;
	const data = (await getClient(this).httpGet(
		`/sms/${serviceName}/task/${taskId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
