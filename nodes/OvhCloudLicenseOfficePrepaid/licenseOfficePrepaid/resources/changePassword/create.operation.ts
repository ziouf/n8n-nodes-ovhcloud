import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Change password for an Office Prepaid license.
 *
 * HTTP method: POST
 * Endpoint: /license/officePrepaid/{serviceName}/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Office Prepaid license service',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(
		`/license/officePrepaid/${serviceName}/changePassword`,
	)) as IDataObject;
	return [{ json: data }];
}
