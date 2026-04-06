import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Install a new module operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/module` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Admin Name',
			name: 'adminName',
			type: 'string',
			default: '',
			description: 'The login for the admin account (may be a standard string or your email)',
			displayOptions,
		},
		{
			displayName: 'Admin Password',
			name: 'adminPassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The password for the admin account (at least 8 characters)',
			displayOptions,
		},
		{
			displayName: 'Dependencies',
			name: 'dependencies',
			type: 'string',
			default: '',
			description: 'The dependencies that we have to configure on your module. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example.',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'On which domain the module has to be available (it can be a multidomain or a subdomain) - if not set, the module will be available on your serviceName domain',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			description: 'The language to set to your module',
			displayOptions,
		},
		{
			displayName: 'Module ID',
			name: 'moduleId',
			type: 'number',
			default: '',
			required: true,
			description: 'ID of the module you want to install',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			description: 'Where to install the module, relative to your home directory',
			displayOptions,
		},
	];
}

/**
 * Executes the Install a new module operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/module
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const adminName = this.getNodeParameter('adminName', 0) as string;
	const adminPassword = this.getNodeParameter('adminPassword', 0) as string;
	const dependencies = this.getNodeParameter('dependencies', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const language = this.getNodeParameter('language', 0) as string;
	const moduleId = this.getNodeParameter('moduleId', 0) as number;
	const path = this.getNodeParameter('path', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/module`, { body: { adminName: adminName, adminPassword: adminPassword, dependencies: dependencies, domain: domain, language: language, moduleId: moduleId, path: path } })) as IDataObject;
	return [{ json: data }];
}
