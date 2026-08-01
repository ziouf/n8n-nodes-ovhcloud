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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
		},
		{
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupId identifier',
		},

	];
}

/**
 * Executes the Delete DeleteBackup operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/{serviceName}/backup/{backupId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const backupId = this.getNodeParameter('backupId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dbaas/' + serviceName + '/backup/' + backupId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
