import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Filter by datacenter region (e.g. gra, rbx, sbg)',
			placeholder: 'e.g. gra',
			displayOptions,
		},
	];
}

/**
 * Executes the List Nasha (NAS) operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs: Record<string, string> = {};

	const region = (this.getNodeParameter('region', _itemIndex ?? 0) as string) || undefined;
	if (region) qs.region = region;

	const data = (await client.httpGet('/dedicated/nasha', qs)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
