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
 * Executes the Get Upgrade Baremetal Public Bandwidth operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/baremetalPublicBandwidth/{serviceName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	void serviceName; // used in template literal

	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/baremetalPublicBandwidth/{serviceName}`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
