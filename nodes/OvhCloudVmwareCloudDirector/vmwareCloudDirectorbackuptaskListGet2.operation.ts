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
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupId identifier',
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
 * Executes the Get Get a specific task related to the VMware Cloud Director backup service operation.
 *
 * HTTP method: GET
 * Endpoint: /vmwareCloudDirector/backup/{backupId}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const backupId = this.getNodeParameter('backupId', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vmwareCloudDirector/backup/' + backupId + '/task/' + taskId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
