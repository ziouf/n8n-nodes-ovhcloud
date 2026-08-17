import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Log Subscription operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;
	const data = (await client.httpDelete(`/dedicatedCloud/${serviceName}/log/subscription/${subscriptionId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
