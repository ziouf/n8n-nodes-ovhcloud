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
          displayName: 'Ip',
          name: 'ip',
          type: 'string',
          default: '',
          required: true,
          description: 'Ip parameter',
          displayOptions,
        },
	];
}

/**
 * Update an IP whitelist in a Web Cloud Database
 *
 * HTTP method: PUT
 * Endpoint: /hosting/privateDatabase/{serviceName}/whitelist/{ip}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPut('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'whitelist' + '/' + encodeURIComponent(ip))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
