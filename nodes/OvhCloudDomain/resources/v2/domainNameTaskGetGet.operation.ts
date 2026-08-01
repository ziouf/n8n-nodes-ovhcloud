import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainName identifier',
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId identifier',
		},

	];
}

/**
 * Executes the Get Get a specific task related to a managed domain name resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/name/{domainName}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const domainName = this.getNodeParameter('domainName', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain/name/' + domainName + '/task/' + taskId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
