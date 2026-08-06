import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Upgrade Private SQL operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/privateSQL/{domain}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	void domain; // used in template literal

	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/privateSQL/{domain}`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
