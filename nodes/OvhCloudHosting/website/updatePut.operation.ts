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
		{
			displayName: 'Template',
			name: 'template',
			type: 'string',
			default: '',
			description: 'The template to update the website with',
			displayOptions,
		},
	];
}

/**
 * Update a website
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/website/{serviceName}/{websiteName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const websiteName = this.getNodeParameter('websiteName', _itemIndex) as string;
	const template = this.getNodeParameter('template', _itemIndex) as string;
	const data = (await client.httpPut(`/hosting/web/website/${serviceName}/${websiteName}`, {
		template,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
