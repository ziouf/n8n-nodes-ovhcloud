import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get Exchange configuration for an MS service account.
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}/exchange
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
 * Executes the Get Account Exchange operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', 0) as string;
	const data = (await client.httpGet(
		`/msServices/${serviceName}/account/${userPrincipalName}/exchange`,
	)) as IDataObject;
	return [{ json: data }];
}
