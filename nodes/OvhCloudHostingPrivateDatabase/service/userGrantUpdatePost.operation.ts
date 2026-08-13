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
          displayName: 'UserName',
          name: 'userName',
          type: 'string',
          default: '',
          required: true,
          description: 'UserName parameter',
          displayOptions,
        },
        {
          displayName: 'DatabaseName',
          name: 'databaseName',
          type: 'string',
          default: '',
          required: true,
          description: 'DatabaseName parameter',
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
	];
}

/**
 * Update the permissions of a grant for a user on a Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex) as string;
	const grant = this.getNodeParameter('grant', _itemIndex, '') as string;

	const body: IDataObject = {};
	if (grant) {
		body['grant'] = grant;
	}

	const client = getClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'user' + '/' + encodeURIComponent(userName) + '/' + 'grant' + '/' + encodeURIComponent(databaseName) + '/' + 'update', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
