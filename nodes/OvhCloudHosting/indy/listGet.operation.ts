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
			description: 'Filter the indy users on their login',
			displayOptions,
		},
	];
}

/**
 * List the multidomain independent users of the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/indy
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const login = this.getNodeParameter('login', itemIndex as number, '') as string;

	const qs: IDataObject = {};
	if (login) {
		qs.login = login;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/indy`,
		qs,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ login: name })));
}
