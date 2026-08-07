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
          displayName: 'DocumentId',
          name: 'documentId',
          type: 'string',
          default: '',
          description: 'DocumentId field',
          displayOptions,
        },
	];
}

/**
 * Import a database into a Web Cloud Database
 *
 * HTTP method: POST
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}/import
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', itemIndex, '') as string;

	const body: IDataObject = {};
	if (documentId) {
		body['documentId'] = documentId;
	}

	const client = new ApiClient(this);
	const data = (await client.httpPost('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'database' + '/' + encodeURIComponent(databaseName) + '/' + 'import', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
