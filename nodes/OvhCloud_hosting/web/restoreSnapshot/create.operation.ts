import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/restoreSnapshot` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Backup',
			name: 'backup',
			type: 'string',
			default: '',
			required: true,
			description: 'The backup you want to restore',
			displayOptions,
		},
	];
}

/**
 * Executes the Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/restoreSnapshot
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const backup = this.getNodeParameter('backup', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/restoreSnapshot`, { body: { backup: backup } })) as IDataObject;
	return [{ json: data }];
}
