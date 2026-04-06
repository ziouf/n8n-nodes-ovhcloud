import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Request the creation of a new runtime configuration operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/runtime` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'App Bootstrap',
			name: 'appBootstrap',
			type: 'string',
			default: '',
			description: 'The client application bootstrap script',
			displayOptions,
		},
		{
			displayName: 'App Env',
			name: 'appEnv',
			type: 'string',
			default: '',
			description: 'The client application environment',
			displayOptions,
		},
		{
			displayName: 'Attached Domains',
			name: 'attachedDomains',
			type: 'string',
			default: '',
			description: 'The attached domains fqdn to link to this runtime configuration',
			displayOptions,
		},
		{
			displayName: 'Is Default',
			name: 'isDefault',
			type: 'boolean',
			default: false,
			description: 'Set if the runtime configuration is the one by default for the hosting',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The custom display name of the runtime configuration',
			displayOptions,
		},
		{
			displayName: 'Public Dir',
			name: 'publicDir',
			type: 'string',
			default: '',
			description: 'The client application public directory',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'The backend type of a runtime configuration',
			displayOptions,
		},
	];
}

/**
 * Executes the Request the creation of a new runtime configuration operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/runtime
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const appBootstrap = this.getNodeParameter('appBootstrap', 0) as string;
	const appEnv = this.getNodeParameter('appEnv', 0) as string;
	const attachedDomains = this.getNodeParameter('attachedDomains', 0) as string;
	const isDefault = this.getNodeParameter('isDefault', 0) as boolean;
	const name = this.getNodeParameter('name', 0) as string;
	const publicDir = this.getNodeParameter('publicDir', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/runtime`, { body: { appBootstrap: appBootstrap, appEnv: appEnv, attachedDomains: attachedDomains, isDefault: isDefault, name: name, publicDir: publicDir, type: type } })) as IDataObject;
	return [{ json: data }];
}
