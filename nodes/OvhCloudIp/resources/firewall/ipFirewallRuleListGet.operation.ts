/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-display-name-not-first-position */
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { filtersCollection, type FilterDefinition } from '../../../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../../../shared/nodes/filterQuery';

// ── Filter definitions ──────────────────────────────────────────────────

export const IP_FIREWALL_RULE_FILTERS: FilterDefinition[] = [
	{
		group: 'status',
		groupDisplayName: 'Status',
		name: 'value',
		displayName: 'State',
		queryParam: 'state',
		type: 'options',
		default: 'ok',
		options: [
			{ name: 'Creation Pending', value: 'creationPending' },
			{ name: 'OK', value: 'ok' },
			{ name: 'Removal Pending', value: 'removalPending' },
		],
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier (e.g. 1.2.3.4/32)',
			displayOptions,
		},
		{
			displayName: 'Ip On Firewall',
			name: 'ipOnFirewall',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address protected by the firewall',
			displayOptions,
		},
		...filtersCollection(displayOptions, IP_FIREWALL_RULE_FILTERS),
	];
}

/**
 * Executes the Get List Firewall Rules operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/firewall/{ipOnFirewall}/rule
 */

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', _itemIndex) as string;

	const client = getClient(this);
	const qs = buildFilterQuery(this, _itemIndex, IP_FIREWALL_RULE_FILTERS);
	const data = (await client.httpGet(
		`/ip/${encodeURIComponent(ip)}/firewall/${encodeURIComponent(ipOnFirewall)}/rule`,
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
