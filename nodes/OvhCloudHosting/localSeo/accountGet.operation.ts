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
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Account ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get a Local SEO account by id
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/localSeo/account/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const id = this.getNodeParameter('id', _itemIndex as number) as number;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/localSeo/account/${encodeURIComponent(String(id))}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
