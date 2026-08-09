import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Login Suffix',
			name: 'loginSuffix',
			type: 'string',
			default: '',
			required: true,
			description: 'Suffix that will be concatenated to the zoneName to create the login',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Password of the login',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			required: true,
			description: 'Subdomain that the login will be allowed to update (use * to allow all)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new login operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/dynHost/login
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const loginSuffix = this.getNodeParameter('loginSuffix', _itemIndex, '') as string;
		body['loginSuffix'] = loginSuffix;
		const password = this.getNodeParameter('password', _itemIndex, '') as string;
		body['password'] = password;
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		body['subDomain'] = subDomain;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/login`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
