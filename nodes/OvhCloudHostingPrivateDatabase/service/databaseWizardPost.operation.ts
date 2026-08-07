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
          displayName: 'DatabaseName',
          name: 'databaseName',
          type: 'string',
          default: '',
          description: 'DatabaseName field',
          displayOptions,
        },
        {
          displayName: 'Grant',
          name: 'grant',
          type: 'string',
          default: '',
          description: 'Grant field',
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
 * Create a new database/user and grant it
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/databaseWizard
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex, '') as string;
	const grant = this.getNodeParameter('grant', itemIndex, '') as string;
	const password = this.getNodeParameter('password', itemIndex, '') as string;
	const userName = this.getNodeParameter('userName', itemIndex, '') as string;

	const body: IDataObject = {};
	if (databaseName) {
		body['databaseName'] = databaseName;
	}
	if (grant) {
		body['grant'] = grant;
	}
	if (password) {
		body['password'] = password;
	}
	if (userName) {
		body['userName'] = userName;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'databaseWizard', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
