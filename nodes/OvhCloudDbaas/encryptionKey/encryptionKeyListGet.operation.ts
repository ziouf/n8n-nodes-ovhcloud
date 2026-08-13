import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
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
			displayOptions,
		},
		{
			displayName: 'Title Pattern',
			name: 'titlePattern',
			type: 'string',
			default: '',
			description: 'Filter by title (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET encryptionKeyListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/encryptionKey
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const titlePattern = (this.getNodeParameter('titlePattern', _itemIndex, '') as string) || '';
	if (titlePattern) {
		qs.titlePattern = titlePattern;
	}
	const client = getClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/encryptionKey`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
