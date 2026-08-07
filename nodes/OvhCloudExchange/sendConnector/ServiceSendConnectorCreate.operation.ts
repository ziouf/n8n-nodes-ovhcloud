import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your send connector',
		},
		{
			displayName: 'Max Send Size',
			name: 'maxSendSize',
			type: 'string',
			default: '',
			description: 'Maximum message size allowd on that send connector',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Password that will be used to connect to smartHost',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'string',
			default: '',
			description: 'Port adress that will be used to all e-mails send via this send connector',
		},
		{
			displayName: 'Require T L S',
			name: 'requireTLS',
			type: 'string',
			default: '',
			description: 'All messages sent through this connector will be transmitted using TLS',
		},
		{
			displayName: 'Smart Host',
			name: 'smartHost',
			type: 'string',
			default: '',
			required: true,
			description: 'Relay domain address that will be used to all e-mails send via this send connector',
		},
		{
			displayName: 'Smart Host Auth Mechanism',
			name: 'smartHostAuthMechanism',
			type: 'string',
			default: '',
			description: 'Authentication mechanism to use for authentication with a smart host',
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			description: 'User that will be used to connect to smartHost',
		},
	];
}

/**
 * Create new send connector
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sendConnector
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const displayName = this.getNodeParameter('displayName', 0) as string;
	const maxSendSize = this.getNodeParameter('maxSendSize', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const port = this.getNodeParameter('port', 0) as string;
	const requireTLS = this.getNodeParameter('requireTLS', 0) as string;
	const smartHost = this.getNodeParameter('smartHost', 0) as string;
	const smartHostAuthMechanism = this.getNodeParameter('smartHostAuthMechanism', 0) as string;
	const user = this.getNodeParameter('user', 0) as string;

	const body: IDataObject = {
    displayName: displayName,
    maxSendSize: maxSendSize,
    password: password,
    port: port,
    requireTLS: requireTLS,
    smartHost: smartHost,
    smartHostAuthMechanism: smartHostAuthMechanism,
    user: user
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sendConnector", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
