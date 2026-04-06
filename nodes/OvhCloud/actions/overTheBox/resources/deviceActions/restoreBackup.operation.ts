import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a group of actions to restore a given backup.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/{serviceName}/device/restoreBackup
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the OverTheBox service',
			displayOptions,
		},
		{
			displayName: 'Restore Details (JSON)',
			name: 'restoreDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Restore backup details as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Restore Device Backup operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('restoreDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/overTheBox/${serviceName}/device/restoreBackup`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
