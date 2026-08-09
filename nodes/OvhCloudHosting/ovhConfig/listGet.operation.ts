import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Historical',
			name: 'historical',
			type: 'boolean',
			default: false,
			description: 'Whether to include the historical configurations',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			description: 'Filter the configurations on their path',
			displayOptions,
		},
	];
}

/**
 * List the ovhConfig of the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ovhConfig
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const historical = this.getNodeParameter('historical', _itemIndex as number, false) as boolean;
	const path = this.getNodeParameter('path', _itemIndex as number, '') as string;

	const qs: IDataObject = {};
	if (historical) {
		qs.historical = historical;
	}
	if (path) {
		qs.path = path;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/ovhConfig`,
		qs,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((id) => ({ id })));
}
