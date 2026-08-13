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
	];
}

/**
 * Alter a Web Cloud Database properties
 *
 * HTTP method: PUT
 * Endpoint: /hosting/privateDatabase/{serviceName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpPut('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
