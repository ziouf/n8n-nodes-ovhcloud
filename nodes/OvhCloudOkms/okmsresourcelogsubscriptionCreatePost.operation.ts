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
			displayName: 'Okms ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The okmsId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Post Create a subscription from logs to a pre-existing LDP stream operation.
 *
 * HTTP method: POST
 * Endpoint: /okms/resource/{okmsId}/log/subscription
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/okms/resource/' + okmsId + '/log/subscription', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
