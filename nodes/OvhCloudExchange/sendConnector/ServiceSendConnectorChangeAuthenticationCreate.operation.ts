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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of this send connector',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'New password',
		},
		{
			displayName: 'Smart Host Auth Mechanism',
			name: 'smartHostAuthMechanism',
			type: 'string',
			default: '',
			description: 'The SmartHostAuthMechanism parameter specifies the smart host authentication mechanism to use for authentication with a remote server',
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
 * Change authentication on send connector
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	const smartHostAuthMechanism = this.getNodeParameter('smartHostAuthMechanism', _itemIndex ?? 0) as string;
	const user = this.getNodeParameter('user', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    password: password,
    smartHostAuthMechanism: smartHostAuthMechanism,
    user: user
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sendConnector/" + encodeURIComponent(id) + "/changeAuthentication", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
