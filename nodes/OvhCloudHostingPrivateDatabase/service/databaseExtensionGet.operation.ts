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
          displayName: 'DatabaseName',
          name: 'databaseName',
          type: 'string',
          default: '',
          required: true,
          description: 'DatabaseName parameter',
          displayOptions,
        },
        {
          displayName: 'ExtensionName',
          name: 'extensionName',
          type: 'string',
          default: '',
          required: true,
          description: 'ExtensionName parameter',
          displayOptions,
        },
	];
}

/**
 * Get properties of a Webcloud Database extension
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex) as string;
	const extensionName = this.getNodeParameter('extensionName', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'database' + '/' + encodeURIComponent(databaseName) + '/' + 'extension' + '/' + encodeURIComponent(extensionName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
