import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          description: 'The internal name of your Web Cloud Database',
          displayOptions,
        },
        {
          displayName: 'Password',
          name: 'password',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          description: 'Password field',
          displayOptions,
        },
        {
          displayName: 'UserName',
          name: 'userName',
          type: 'string',
          default: '',
          description: 'UserName field',
          displayOptions,
        },
	];
}

/**
 * Create a user on a Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/user
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const password = this.getNodeParameter('password', _itemIndex, '') as string;
	const userName = this.getNodeParameter('userName', _itemIndex, '') as string;

	const body: IDataObject = {};
	if (password) {
		body['password'] = password;
	}
	if (userName) {
		body['userName'] = userName;
	}

	const client = getClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'user', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
