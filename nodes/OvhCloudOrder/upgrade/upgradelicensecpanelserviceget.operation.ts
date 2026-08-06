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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Upgrade Licensecpanel operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/licensecPanel/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	void serviceName; // used in template literal

	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/licensecPanel/{serviceName}`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
