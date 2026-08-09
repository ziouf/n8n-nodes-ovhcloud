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
          displayName: 'Kind',
          name: 'kind',
          type: 'string',
          default: '',
          description: 'Kind field',
          displayOptions,
        },
	];
}

/**
 * Generate a temporary URL to retrieve logs
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/log/url
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const kind = this.getNodeParameter('kind', _itemIndex, '') as string;

	const body: IDataObject = {};
	if (kind) {
		body['kind'] = kind;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'url', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
