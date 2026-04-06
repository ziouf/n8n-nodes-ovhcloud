import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief User of multidomain independent allowed on your hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/indy` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			description: 'Filter the value of login property (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the User of multidomain independent allowed on your hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/indy
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/indy`, { qs: { login } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
