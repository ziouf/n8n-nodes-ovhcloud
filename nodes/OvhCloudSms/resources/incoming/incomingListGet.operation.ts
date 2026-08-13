/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-display-name-not-first-position */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';
import type { FilterDefinition } from '../../../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../../../shared/nodes/filterQuery';

/* ------------------------------------------------------------------ */
/*  Incoming list filter definitions (flat / parameterPath mode)      */
/* ------------------------------------------------------------------ */

export const INCOMING_LIST_FILTERS: FilterDefinition[] = [
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'creationDatetimeFrom',
		displayName: 'Creation Datetime From',
		queryParam: 'creationDatetime.from',
		type: 'string',
		default: '',
		description: 'Filter the value of creationDatetime property (>=)',
		parameterPath: 'creationDatetimeFrom',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'creationDatetimeTo',
		displayName: 'Creation Datetime To',
		queryParam: 'creationDatetime.to',
		type: 'string',
		default: '',
		description: 'Filter the value of creationDatetime property (<=)',
		parameterPath: 'creationDatetimeTo',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'sender',
		displayName: 'Sender',
		queryParam: 'sender',
		type: 'string',
		default: '',
		description: 'Filter the value of sender property (=)',
		parameterPath: 'sender',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'tag',
		displayName: 'Tag',
		queryParam: 'tag',
		type: 'string',
		default: '',
		description: 'Filter the value of tag property (=)',
		parameterPath: 'tag',
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Creation Datetime From',
			name: 'creationDatetimeFrom',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDatetime property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime To',
			name: 'creationDatetimeTo',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDatetime property (<=)',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			description: 'Filter the value of sender property (=)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Filter the value of tag property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/incoming operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/incoming
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const qs = buildFilterQuery(this, _itemIndex ?? 0, INCOMING_LIST_FILTERS);
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/incoming`,
		qs,
	)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}
