import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Create Credential operation.
 *
 * Defines the parameters required to request a new API credential:
 * - `accessRules` (required): Array of {method, path} objects defining allowed API access
 * - `allowedIPs` (optional): Array of IP addresses allowed to use the credential
 * - `redirection` (optional): URL to redirect the user to after authentication
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Credential operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Access Rules',
			name: 'accessRules',
			description: 'List of access rules defining which API endpoints the credential can access',
			type: 'collection',
			placeholder: 'Add Access Rule',
			default: {},
			required: true,
			typeOptions: {
				multipleValues: true,
				multipleValueButtonText: 'Add Access Rule',
			},
			options: [
				{
					displayName: 'Method',
					name: 'method',
					description: 'HTTP method allowed for this rule',
					type: 'options',
					options: [
						{ name: 'DELETE', value: 'DELETE' },
						{ name: 'GET', value: 'GET' },
						{ name: 'PATCH', value: 'PATCH' },
						{ name: 'POST', value: 'POST' },
						{ name: 'PUT', value: 'PUT' },
					],
					default: 'GET',
				},
				{
					displayName: 'Path',
					name: 'path',
					description: 'API path this rule applies to (e.g., /me, /vps/*)',
					type: 'string',
					default: '',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Allowed IPs',
			name: 'allowedIPs',
			description: 'List of IP addresses allowed to use this credential',
			type: 'string',
			default: '',
			hint: 'Comma-separated list of IP addresses',
			displayOptions,
		},
		{
			displayName: 'Redirection',
			name: 'redirection',
			description: 'URL to redirect the user to after authentication',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Credential operation.
 *
 * Requests a new API credential with the specified access rules, allowed IPs,
 * and optional redirection URL.
 *
 * HTTP method: POST
 * Endpoint: /auth/credential
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the new credential details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const accessRules = this.getNodeParameter('accessRules', 0, []) as Array<{
		method: string;
		path: string;
	}>;
	const allowedIPsRaw = this.getNodeParameter('allowedIPs', 0, '') as string;
	const redirection = this.getNodeParameter('redirection', 0, '') as string;

	const body: IDataObject = {};

	body.accessRules = accessRules.map((rule) => ({
		method: rule.method,
		path: rule.path,
	}));

	if (allowedIPsRaw) {
		body.allowedIPs = allowedIPsRaw.split(',').map((ip) => ip.trim());
	}

	if (redirection) {
		body.redirection = redirection;
	}

	const data = (await client.httpPost('/auth/credential', { body })) as IDataObject;
	return [{ json: data }];
}
