import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Get VCS webhook URLs operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/vcs/webhooks` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'Filter on hosting path',
			displayOptions,
		},
		{
			displayName: 'Vcs',
			name: 'vcs',
			type: 'string',
			default: '',
			required: true,
			description: 'Filter on VCS platform',
			displayOptions,
		},
	];
}

/**
 * Executes the Get VCS webhook URLs operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/vcs/webhooks
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const vcs = this.getNodeParameter('vcs', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/vcs/webhooks`, { qs: { path, vcs } })) as IDataObject;
	return [{ json: data }];
}
