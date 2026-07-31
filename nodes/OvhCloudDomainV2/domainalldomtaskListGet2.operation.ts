import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'alldom Name',
			name: 'alldomName',
			type: 'string',
			default: '',
			required: true,
			description: 'The alldomName identifier',
		},
		{
			displayName: 'task Id',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId identifier',
		},

	];
}

/**
 * Executes the Get Get a specific task related to a managed AllDom resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/alldom/{alldomName}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const alldomName = this.getNodeParameter('alldomName', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain/alldom/' + alldomName + '/task/' + taskId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
