import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change authentication for a send connector.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Send Connector ID',
			name: 'sendConnectorId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the send connector',
			displayOptions,
		},
		{
			displayName: 'Smart Host Auth Mechanism',
			name: 'smartHostAuthMechanism',
			type: 'options',
			options: [
				{ name: 'Basic Auth', value: 'basicAuth' },
				{ name: 'Basic Auth Require TLS', value: 'basicAuthRequireTLS' },
				{ name: 'None', value: 'none' },
			],
			default: 'none',
			required: true,
			description: 'The authentication mechanism',
			displayOptions,
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			description: 'The user for authentication',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			typeOptions: { password: true },
			description: 'The password for authentication',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Send Connector Authentication operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const sendConnectorId = this.getNodeParameter('sendConnectorId', 0) as number;
	const smartHostAuthMechanism = this.getNodeParameter('smartHostAuthMechanism', 0) as string;

	const body: IDataObject = { smartHostAuthMechanism };
	const user = this.getNodeParameter('user', 0, '') as string;
	const password = this.getNodeParameter('password', 0, '') as string;
	if (user) body.user = user;
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/sendConnector/${sendConnectorId}/changeAuthentication`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
