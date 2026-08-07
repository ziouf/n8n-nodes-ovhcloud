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
	];
}

/**
 * Request the dump of this database (an email will be sent with a link available 30 days)
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'database' + '/' + encodeURIComponent(databaseName) + '/' + 'dump')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
