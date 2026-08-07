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
 * Get a database dump from a Web Cloud Database
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/dump/{dumpId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const dumpId = this.getNodeParameter('dumpId', itemIndex) as number;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'dump' + '/' + encodeURIComponent(dumpId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
