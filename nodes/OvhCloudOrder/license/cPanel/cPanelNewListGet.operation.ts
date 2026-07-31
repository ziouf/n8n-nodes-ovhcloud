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
				{ name: 'office', value: 'office' },
				{ name: 'plesk', value: 'plesk' },
				{ name: 'sqlserver', value: 'sqlserver' },
				{ name: 'windows', value: 'windows' },
			],
			default: '',
			required: true,
			description: 'The license family',
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const family = this.getNodeParameter('family', 0) as string;
	const data = (await client.httpGet(`/order/license/${family}/new`)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
