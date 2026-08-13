import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
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
			displayOptions,
		},
		{
			displayName: 'Website Name',
			name: 'websiteName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the website to create',
			displayOptions,
		},
		{
			displayName: 'Template',
			name: 'template',
			type: 'string',
			default: '',
			description: 'The template to use for the website',
			displayOptions,
		},
	];
}

/**
 * Create a website
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/website/{serviceName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const websiteName = this.getNodeParameter('websiteName', _itemIndex) as string;
	const template = this.getNodeParameter('template', _itemIndex) as string;
	const data = (await client.httpPost(`/hosting/web/website/${serviceName}`, {
		name: websiteName,
		template,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
