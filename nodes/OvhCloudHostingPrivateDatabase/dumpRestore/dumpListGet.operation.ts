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
          displayName: 'databaseName',
          name: 'databaseName',
          type: 'string',
          default: '',
          description: 'Filter on databaseName',
          displayOptions,
        },
        {
          displayName: 'Orphan',
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex, '') as string;
	const orphan = this.getNodeParameter('orphan', _itemIndex, '') as string;

	const qs: IDataObject = {};
	if (databaseName) {
		qs['databaseName'] = databaseName;
	}
	if (orphan) {
		qs['orphan'] = orphan;
	}

	const client = getClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'dump', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
