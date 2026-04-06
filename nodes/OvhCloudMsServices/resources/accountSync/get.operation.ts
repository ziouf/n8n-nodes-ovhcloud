import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get Sync configuration for an MS service account.
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}/sync
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
			displayName: 'User Principal Name',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get Account Sync operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', 0) as string;
	const data = (await client.httpGet(
		`/msServices/${serviceName}/account/${userPrincipalName}/sync`,
	)) as IDataObject;
	return [{ json: data }];
}
