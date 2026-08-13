import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			description: 'The ID of the Metrics token to revoke',
			displayOptions,
		},
	];
}

/**
 * Revoke a specific Metrics token.
 *
 * HTTP method: DELETE
 * Endpoint: /metrics/{serviceName}/token/{tokenId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const tokenId = this.getNodeParameter('tokenId', _itemIndex ?? 0) as string;
	await client.httpDelete(
		`/metrics/${encodeURIComponent(serviceName)}/token/${encodeURIComponent(tokenId)}`,
	);

	return this.helpers.returnJsonArray([{ serviceName, tokenId, success: true }]);
}
