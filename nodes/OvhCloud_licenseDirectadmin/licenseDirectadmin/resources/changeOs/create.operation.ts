import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Change the OS of a Directadmin license.
 *
 * HTTP method: POST
 * Endpoint: /license/directadmin/{serviceName}/changeOs
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Directadmin license service',
			displayOptions,
		},
		{
			displayName: 'OS',
			name: 'os',
			type: 'string',
			default: '',
			required: true,
			description: 'The new OS for the license',
			displayOptions,
		},
	];
}

/**
 * Executes the Change OS operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const os = this.getNodeParameter('os', 0) as string;
	const data = (await client.httpPost(
		`/license/directadmin/${serviceName}/changeOs`,
		{ body: { os } },
	)) as IDataObject;
	return [{ json: data }];
}
