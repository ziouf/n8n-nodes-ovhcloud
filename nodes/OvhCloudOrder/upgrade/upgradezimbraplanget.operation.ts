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
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Plan code for the upgrade',
			displayOptions,
		},
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
 * Executes the Get Upgrade Zimbra operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/zimbra/{serviceName}/{planCode}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const planCode = this.getNodeParameter('planCode', _itemIndex) as string;
	void planCode; // used in template literal
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	void serviceName; // used in template literal

	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/zimbra/{serviceName}/{planCode}`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
