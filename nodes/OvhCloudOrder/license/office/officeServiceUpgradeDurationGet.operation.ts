import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
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
 * Executes the Get Prices for Upgrade operation.
 *
 * HTTP method: GET
 * Endpoint: /order/license/{family}/{serviceName}/upgrade/{duration}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const family = this.getNodeParameter('family', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const duration = this.getNodeParameter('duration', _itemIndex) as string;
	const data = (await client.httpGet(
		`/order/license/${family}/${serviceName}/upgrade/${duration}`,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
