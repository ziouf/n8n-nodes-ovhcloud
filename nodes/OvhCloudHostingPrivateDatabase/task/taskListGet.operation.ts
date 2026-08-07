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
          displayName: 'function',
          name: 'function',
          type: 'string',
          default: '',
          description: 'Filter on function',
          displayOptions,
        },
        {
          displayName: 'status',
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const _function = this.getNodeParameter('function', itemIndex, '') as string;
	const status = this.getNodeParameter('status', itemIndex, '') as string;

	const qs: IDataObject = {};
	if (_function) {
		qs['function'] = _function;
	}
	if (status) {
		qs['status'] = status;
	}

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'tasks', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
