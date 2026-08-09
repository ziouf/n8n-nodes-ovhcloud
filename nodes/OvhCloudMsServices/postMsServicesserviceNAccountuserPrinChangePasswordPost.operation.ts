import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'UserPrincipalName',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			required: true,
			description: 'The userprincipalname identifier',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The password value',
			displayOptions,
		},
	];
}

/**
 * Change account password
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', _itemIndex) as string;



	const password = this.getNodeParameter('password', _itemIndex) as string;


const body: IDataObject = {
    password: password
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'account' + '/' + encodeURIComponent(userPrincipalName) + '/' + 'changePassword', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

