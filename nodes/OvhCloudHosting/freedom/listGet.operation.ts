import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{ name: 'All', value: '' },
				{ name: 'Blocked by Customer', value: 'blockedByCustomer' },
				{ name: 'Blocked by System', value: 'blockedBySystem' },
				{ name: 'Ok', value: 'ok' },
				{ name: 'Preset', value: 'preset' },
			],
			default: '',
			description: 'Filter the freedom status',
			displayOptions,
		},
	];
}

/**
 * List the freedoms of the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/freedom
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const status = this.getNodeParameter('status', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {};
	if (status) {
		qs.status = status;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/freedom`,
		qs,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
