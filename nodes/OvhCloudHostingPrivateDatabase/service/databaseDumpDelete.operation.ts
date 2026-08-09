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
          displayName: 'DatabaseName',
          name: 'databaseName',
          type: 'string',
          default: '',
          required: true,
          description: 'DatabaseName parameter',
          displayOptions,
        },
        {
          displayName: 'ID',
          name: 'id',
          type: 'number',
          default: 0,
          required: true,
          description: 'ID parameter',
          displayOptions,
        },
	];
}

/**
 * Delete dump before expiration date
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as number;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'database' + '/' + encodeURIComponent(databaseName) + '/' + 'dump' + '/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
