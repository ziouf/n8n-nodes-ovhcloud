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
          displayName: 'Name',
          name: 'name',
          type: 'string',
          default: '',
          required: true,
          description: 'Name parameter',
          displayOptions,
        },
	];
}

/**
 * Get a log kind
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/log/kind/{name}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'kind' + '/' + encodeURIComponent(name))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
