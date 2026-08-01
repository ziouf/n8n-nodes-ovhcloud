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
 * Get website details
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/website/{serviceName}/{websiteName}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const websiteName = this.getNodeParameter('websiteName', itemIndex) as string;
	const data = (await client.httpGet(
		`/hosting/web/website/${serviceName}/${websiteName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
