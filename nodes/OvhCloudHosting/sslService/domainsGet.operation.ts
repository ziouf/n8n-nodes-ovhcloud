import type {
	IExecuteFunctions,
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
	];
}

/**
 * List the domains of the hosting SSL certificate
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ssl/domains
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/ssl/domains`,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((domain) => ({ domain })));
}
