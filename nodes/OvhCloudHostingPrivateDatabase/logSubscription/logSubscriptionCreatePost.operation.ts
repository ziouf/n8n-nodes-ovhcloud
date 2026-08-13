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
          displayName: 'Kind',
          name: 'kind',
          type: 'string',
          default: '',
          description: 'Kind field',
          displayOptions,
        },
        {
          displayName: 'StreamId',
          name: 'streamId',
          type: 'string',
          default: '',
          description: 'StreamId field',
          displayOptions,
        },
	];
}

/**
 * Create subscription to log to customer for a Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/log/subscription
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const kind = this.getNodeParameter('kind', _itemIndex, '') as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex, '') as string;

	const body: IDataObject = {};
	if (kind) {
		body['kind'] = kind;
	}
	if (streamId) {
		body['streamId'] = streamId;
	}

	const client = getClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'subscription', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
