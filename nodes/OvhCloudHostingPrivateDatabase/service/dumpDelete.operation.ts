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
          displayName: 'DumpId',
          name: 'dumpId',
          type: 'number',
          default: 0,
          required: true,
          description: 'DumpId parameter',
          displayOptions,
        },
	];
}

/**
 * Delete a database dump from a Web Cloud Database
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/privateDatabase/{serviceName}/dump/{dumpId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dumpId = this.getNodeParameter('dumpId', _itemIndex) as number;

	const client = getClient(this);
	const data = (await client.httpDelete('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'dump' + '/' + encodeURIComponent(dumpId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
