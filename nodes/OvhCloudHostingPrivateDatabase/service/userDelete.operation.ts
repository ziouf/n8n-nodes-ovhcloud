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
	];
}

/**
 * Delete a user on a Web Cloud Database
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/privateDatabase/{serviceName}/user/{userName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'user' + '/' + encodeURIComponent(userName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
