import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Family',
			name: 'family',
			type: 'options',
			options: [
				{ name: 'cPanel', value: 'cPanel' },
				{ name: 'Office', value: 'office' },
				{ name: 'Plesk', value: 'plesk' },
				{ name: 'Sqlserver', value: 'sqlserver' },
				{ name: 'Windows', value: 'windows' },
			],
			default: 'cPanel',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get Allowed Durations for New operation.
 *
 * HTTP method: GET
 * Endpoint: /order/license/{family}/new
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const family = this.getNodeParameter('family', _itemIndex) as string;
	const data = (await client.httpGet(`/order/license/${family}/new`)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
