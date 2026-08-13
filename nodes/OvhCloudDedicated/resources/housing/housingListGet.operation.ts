import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'Filter by country code (e.g. fr, uk, de)',
			placeholder: 'e.g. fr',
			displayOptions,
		},
	];
}

/**
 * Executes the List Housing operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs: Record<string, string> = {};

	const country = (this.getNodeParameter('country', _itemIndex ?? 0) as string) || undefined;
	if (country) qs.country = country;

	const data = (await client.httpGet('/dedicated/housing', qs)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
