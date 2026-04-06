import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * List VMware Cloud Director backup tasks.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/backup/{backupId}/task
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the backup',
			displayOptions,
		},
	];
}

/**
 * Executes the List VMware Cloud Director Backup Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const backupId = this.getNodeParameter('backupId', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/backup/${backupId}/task`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
