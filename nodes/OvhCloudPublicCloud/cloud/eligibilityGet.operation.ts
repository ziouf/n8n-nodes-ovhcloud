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
			displayName: 'Voucher',
			name: 'voucher',
			type: 'string',
			default: '',
			description: 'Voucher code',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Eligibility operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/eligibility
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const voucher = this.getNodeParameter('voucher', _itemIndex ?? 0, '') as string;

	const qs: Record<string, string> = {};
	if (voucher) {
		qs.voucher = voucher;
	}

	const data = (await client.httpGet('/publicCloud/eligibility', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
