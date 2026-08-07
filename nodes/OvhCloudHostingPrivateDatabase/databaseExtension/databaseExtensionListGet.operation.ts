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
          displayName: 'extensionName',
          name: 'extensionName',
          type: 'string',
          default: '',
          description: 'Filter on extensionName',
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
 * List extensions available for a Webcloud Database
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex) as string;
	const extensionName = this.getNodeParameter('extensionName', itemIndex, '') as string;
	const status = this.getNodeParameter('status', itemIndex, '') as string;

	const qs: IDataObject = {};
	if (extensionName) {
		qs['extensionName'] = extensionName;
	}
	if (status) {
		qs['status'] = status;
	}

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'database' + '/' + encodeURIComponent(databaseName) + '/' + 'extension', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
