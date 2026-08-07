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
          displayName: 'Id',
          name: 'id',
          type: 'number',
          default: 0,
          required: true,
          description: 'Id parameter',
          displayOptions,
        },
	];
}

/**
 * Get task details
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/tasks/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as number;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'tasks' + '/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
