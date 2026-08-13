import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
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
 * Executes the Get Get subscription details operation.
 *
 * HTTP method: GET
 * Endpoint: /iam/log/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/iam/log/subscription/' + subscriptionId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
