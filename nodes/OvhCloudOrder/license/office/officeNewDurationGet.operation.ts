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
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			description: 'The duration (e.g. P1M, P1Y)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Prices for New operation.
 *
 * HTTP method: GET
 * Endpoint: /order/license/{family}/new/{duration}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const family = this.getNodeParameter('family', 0) as string;
	const duration = this.getNodeParameter('duration', 0) as string;
	const data = (await client.httpGet(`/order/license/${family}/new/${duration}`)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
