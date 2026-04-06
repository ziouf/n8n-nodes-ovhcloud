import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create Hosting Whitelist operation
 *
 * Creates a new IP whitelist entry in a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Hosting Whitelist operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hosting service',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address to whitelist',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'A name for this whitelist entry',
			displayOptions,
		},
		{
			displayName: 'Service',
			name: 'service',
			type: 'options',
			options: [
				{ name: 'FTP', value: 'ftp' },
				{ name: 'SFTP', value: 'sftp' },
			],
			default: 'ftp',
			description: 'The service to whitelist for',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Hosting Whitelist operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/whitelist
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created whitelist entry
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const name = this.getNodeParameter('name', 0, '') as string;
	const service = this.getNodeParameter('service', 0, 'ftp') as string;
	const data = (await client.httpPost(`/hosting/privateDatabase/${serviceName}/whitelist`, {
		body: { ip, name, service },
	})) as IDataObject;
	return [{ json: data }];
}
