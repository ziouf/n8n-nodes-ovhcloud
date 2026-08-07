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
          description: 'The internal name of your Web Cloud Database',
          displayOptions,
        },
        {
          displayName: 'UserName',
          name: 'userName',
          type: 'string',
          default: '',
          required: true,
          description: 'UserName parameter',
          displayOptions,
        },
        {
          displayName: 'Password',
          name: 'password',
          type: 'string',
          default: '',
          description: 'Password field',
          displayOptions,
        },
	];
}

/**
 * Change the password of a user on a Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/user/{userName}/changePassword
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userName = this.getNodeParameter('userName', itemIndex) as string;
	const password = this.getNodeParameter('password', itemIndex, '') as string;

	const body: IDataObject = {};
	if (password) {
		body['password'] = password;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'user' + '/' + encodeURIComponent(userName) + '/' + 'changePassword', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
