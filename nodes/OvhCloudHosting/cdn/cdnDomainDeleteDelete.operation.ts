import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
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
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Remove a domain from CDN
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/cdn/{serviceName}/domain/{domain}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	await client.httpDelete(`/hosting/web/cdn/${serviceName}/domain/${domain}`);
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, success: true }]);
}
