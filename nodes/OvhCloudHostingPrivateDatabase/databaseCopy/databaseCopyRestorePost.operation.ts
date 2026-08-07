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
          displayName: 'CopyId',
          name: 'copyId',
          type: 'string',
          default: '',
          description: 'CopyId field',
          displayOptions,
        },
	];
}

/**
 * Request the copy into a Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}/copyRestore
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex) as string;
	const copyId = this.getNodeParameter('copyId', itemIndex, '') as string;

	const body: IDataObject = {};
	if (copyId) {
		body['copyId'] = copyId;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'database' + '/' + encodeURIComponent(databaseName) + '/' + 'copyRestore', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
