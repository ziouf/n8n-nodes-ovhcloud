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
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'Login of the multidomain independent user',
			displayOptions,
		},
	];
}

/**
 * Get a multidomain independent user by login
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/indy/{login}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const login = this.getNodeParameter('login', itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/indy/${encodeURIComponent(login)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
