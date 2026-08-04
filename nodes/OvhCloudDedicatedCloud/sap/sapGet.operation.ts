import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get SAP Pre-installation Task operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/sap/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/sap/${taskId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
