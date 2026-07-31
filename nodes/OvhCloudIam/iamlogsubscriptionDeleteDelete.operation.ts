import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'subscription Id',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The subscriptionId identifier',
		},

	];
}

/**
 * Executes the Delete Delete a subscription operation.
 *
 * HTTP method: DELETE
 * Endpoint: /iam/log/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const subscriptionId = this.getNodeParameter('subscriptionId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/iam/log/subscription/' + subscriptionId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
