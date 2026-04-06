/**
 * @brief Update Whitelist operation for private database
 *
 * HTTP PUT request to `/hosting/privateDatabase/{serviceName}/whitelist/{ip}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address to update',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpPut(
		`/hosting/privateDatabase/${serviceName}/whitelist/${ip}`,
	)) as IDataObject;
	return [{ json: data }];
}
