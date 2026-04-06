import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific VMware Cloud Director backup.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/backup/{backupId}
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
 * Executes the Get VMware Cloud Director Backup operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const backupId = this.getNodeParameter('backupId', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/backup/${backupId}`)) as IDataObject;
	return [{ json: data }];
}
