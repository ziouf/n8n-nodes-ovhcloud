import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the global datastore',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Execution Date',
			name: 'executionDate',
			type: 'string',
			default: '',
			required: true,
			description: 'The new execution date',
			displayOptions,
		},
	];
}

/**
 * Executes the Change the execution date of a maintenance operation operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const body: IDataObject = {};
	body.executionDate = this.getNodeParameter('executionDate', _itemIndex) as string;
	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}/changeMaintenanceExecutionDate`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
