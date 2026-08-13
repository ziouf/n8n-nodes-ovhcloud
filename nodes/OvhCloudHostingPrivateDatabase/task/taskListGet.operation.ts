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
          displayName: 'Function',
          name: 'function',
          type: 'string',
          default: '',
          description: 'Filter on function',
          displayOptions,
        },
        {
          displayName: 'Status',
          name: 'status',
          type: 'string',
          default: '',
          description: 'Filter on status',
          displayOptions,
        },
	];
}

/**
 * List tasks for a Webcloud Database
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/tasks
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const _function = this.getNodeParameter('function', _itemIndex, '') as string;
	const status = this.getNodeParameter('status', _itemIndex, '') as string;

	const qs: IDataObject = {};
	if (_function) {
		qs['function'] = _function;
	}
	if (status) {
		qs['status'] = status;
	}

	const client = getClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'tasks', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
