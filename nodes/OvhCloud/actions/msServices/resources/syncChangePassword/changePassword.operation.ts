import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change password for Sync.
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/sync/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'New password',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Sync Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const data = (await client.httpPost(`/msServices/${serviceName}/sync/changePassword`, {
		body: { password },
	})) as IDataObject;
	return [{ json: data }];
}
