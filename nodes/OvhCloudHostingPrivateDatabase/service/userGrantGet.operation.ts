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
	];
}

/**
 * Get information about the grants for a user in a Web Cloud Database
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'user' + '/' + encodeURIComponent(userName) + '/' + 'grant' + '/' + encodeURIComponent(databaseName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
