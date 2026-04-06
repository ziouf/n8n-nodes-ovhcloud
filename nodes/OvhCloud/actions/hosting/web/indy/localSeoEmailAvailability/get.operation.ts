import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Check email availability for a local SEO order operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/localSeo/emailAvailability` endpoint.
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
			required: true,
			description: 'The email address to check',
			displayOptions,
		},
	];
}

/**
 * Executes the Check email availability for a local SEO order operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/localSeo/emailAvailability
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/localSeo/emailAvailability`, { qs: { email } })) as IDataObject;
	return [{ json: data }];
}
