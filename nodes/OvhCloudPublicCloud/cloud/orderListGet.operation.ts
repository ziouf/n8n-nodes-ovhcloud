import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'Order plan code',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Orders operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/order
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const planCode = this.getNodeParameter('planCode', _itemIndex ?? 0, '') as string;

	const qs: Record<string, string> = {};
	if (planCode) {
		qs.planCode = planCode;
	}

	const data = (await client.httpGet('/publicCloud/order', qs)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
