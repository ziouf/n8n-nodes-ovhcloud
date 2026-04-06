import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Local SEO accounts associated to the hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/localSeo/account` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Filter the value of email property (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the Local SEO accounts associated to the hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/localSeo/account
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/localSeo/account`, { qs: { email } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
