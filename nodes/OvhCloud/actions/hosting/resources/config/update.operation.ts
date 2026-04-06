/**
 * @brief Update Config operation for private database hosting
 *
 * Updates the configuration of a Web Cloud Database.
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/config/update
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
			displayName: 'Config',
			name: 'config',
			type: 'json',
			default: '{}',
			description: 'Configuration object to update',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const config = this.getNodeParameter('config', 0, '{}') as string;

	let body: IDataObject;
	try {
		body = JSON.parse(config) as IDataObject;
	} catch {
		throw new Error('Config must be valid JSON');
	}

	const data = (await client.httpPost(`/hosting/privateDatabase/${serviceName}/config/update`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
