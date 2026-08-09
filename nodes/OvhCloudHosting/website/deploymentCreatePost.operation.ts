import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
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
			displayOptions,
		},
		{
			displayName: 'Website Name',
			name: 'websiteName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Deploy a website
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/website/{serviceName}/{websiteName}/deployment
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const websiteName = this.getNodeParameter('websiteName', _itemIndex) as string;
	const data = (await client.httpPost(
		`/hosting/web/website/${serviceName}/${websiteName}/deployment`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
