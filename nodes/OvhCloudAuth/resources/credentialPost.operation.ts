import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Access Rules',
			name: 'accessRules',
			type: 'json',
			default: '[]',
			required: true,
			description:
				'API routes the credential should be allowed to access, as an array of objects with a method and a path property (e.g. [{"method": "GET", "path": "/me"}])',
			displayOptions,
		},
		{
			displayName: 'Allowed IPs',
			name: 'allowedIPs',
			type: 'json',
			default: '[]',
			description:
				'List of IP blocks allowed to call the API with this credential (e.g. ["192.0.2.0/24"])',
			displayOptions,
		},
		{
			displayName: 'Redirection',
			name: 'redirection',
			type: 'string',
			default: '',
			description: 'Address where the client will be redirected after authentication',
			displayOptions,
		},
	];
}

/**
 * Request a new credential for your application.
 *
 * HTTP method: POST
 * Endpoint: /auth/credential
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const accessRules = this.getNodeParameter('accessRules', 0) as IDataObject[];
	const allowedIPs = this.getNodeParameter('allowedIPs', 0) as string[];
	const redirection = (this.getNodeParameter('redirection', 0, '') as string) || '';

	const body: IDataObject = { accessRules };
	if (allowedIPs.length > 0) {
		body.allowedIPs = allowedIPs;
	}
	if (redirection) {
		body.redirection = redirection;
	}

	const data = (await client.httpPost('/auth/credential', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
