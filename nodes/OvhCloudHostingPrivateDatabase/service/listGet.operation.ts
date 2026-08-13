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
          displayName: 'iamTags',
          name: 'iamTags',
          type: 'string',
          default: '',
          description: 'Filter on iamTags',
          displayOptions,
        },
	];
}

/**
 * List available Web Cloud Databases
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const iamTags = this.getNodeParameter('iamTags', _itemIndex, '') as string;

	const qs: IDataObject = {};
	if (iamTags) {
		qs['iamTags'] = iamTags;
	}

	const client = getClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
