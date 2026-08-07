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
          displayName: 'databaseName',
          name: 'databaseName',
          type: 'string',
          default: '',
          description: 'Filter on databaseName',
          displayOptions,
        },
        {
          displayName: 'orphan',
          name: 'orphan',
          type: 'string',
          default: '',
          description: 'Filter on orphan',
          displayOptions,
        },
	];
}

/**
 * Get all database dump from a Web Cloud Database
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/dump
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex, '') as string;
	const orphan = this.getNodeParameter('orphan', itemIndex, '') as string;

	const qs: IDataObject = {};
	if (databaseName) {
		qs['databaseName'] = databaseName;
	}
	if (orphan) {
		qs['orphan'] = orphan;
	}

	const client = new ApiClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'dump', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
