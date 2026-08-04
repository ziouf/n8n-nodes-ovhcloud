import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
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
 * Check the availability of an email address for Local SEO
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/localSeo/emailAvailability
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const email = this.getNodeParameter('email', itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/localSeo/emailAvailability`,
		{ email },
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
