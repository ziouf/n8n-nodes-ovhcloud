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
			displayName: 'AllDom Name',
			name: 'alldomName',
			type: 'string',
			default: '',
			required: true,
			description: 'The alldomName identifier',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get a specific task related to a managed AllDom resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/alldom/{alldomName}/task/{taskId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const alldomName = this.getNodeParameter('alldomName', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;

	const data = (await client.httpGet(
		`/domain/alldom/${encodeURIComponent(alldomName)}/task/${encodeURIComponent(taskId)}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
