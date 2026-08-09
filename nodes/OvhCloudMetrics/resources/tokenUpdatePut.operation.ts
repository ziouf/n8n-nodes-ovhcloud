import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Metrics Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Metrics service name (e.g. metrics-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getMetricsServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'metrics-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The ID of the Metrics token',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			description: 'New description for the Metrics token',
			displayOptions,
		},
	];
}

/**
 * Modify a specific Metrics token.
 *
 * HTTP method: PUT
 * Endpoint: /metrics/{serviceName}/token/{tokenId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const tokenId = this.getNodeParameter('tokenId', _itemIndex ?? 0) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;

	const body: IDataObject = { description };
	const data = (await client.httpPut(
		`/metrics/${encodeURIComponent(serviceName)}/token/${encodeURIComponent(tokenId)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
