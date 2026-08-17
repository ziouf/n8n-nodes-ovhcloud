/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-display-name-not-first-position */
import { SERVICE_NAME } from '../../serviceName';
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import type { FilterDefinition } from '../../../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../../../shared/nodes/filterQuery';

/* ------------------------------------------------------------------ */
/*  Outgoing list filter definitions (flat / parameterPath mode)      */
/* ------------------------------------------------------------------ */

export const OUTGOING_LIST_FILTERS: FilterDefinition[] = [
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'batchID',
		displayName: 'Batch ID',
		queryParam: 'batchID',
		type: 'string',
		default: '',
		description: 'Filter on batch ID property (=)',
		parameterPath: 'batchID',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'creationDatetimeFrom',
		displayName: 'Creation Datetime From',
		queryParam: 'creationDatetime.from',
		type: 'string',
		default: '',
		description: 'Filter on creationDatetime property (>=)',
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
		description: 'Filter on creationDatetime property (<=)',
		parameterPath: 'creationDatetimeTo',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'deliveryReceipt',
		displayName: 'Delivery Receipt',
		queryParam: 'deliveryReceipt',
		type: 'number',
		default: 0,
		description: 'Filter on deliveryReceipt property (=)',
		parameterPath: 'deliveryReceipt',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'differedDelivery',
		displayName: 'Differed Delivery',
		queryParam: 'differedDelivery',
		type: 'number',
		default: 0,
		description: 'Filter on differedDelivery property (=)',
		parameterPath: 'differedDelivery',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'messageID',
		displayName: 'Message ID',
		queryParam: 'messageID',
		type: 'string',
		default: '',
		description: 'Filter on message ID property (=)',
		parameterPath: 'messageID',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'ptt',
		displayName: 'Ptt',
		queryParam: 'ptt',
		type: 'number',
		default: 0,
		description: 'Filter on ptt property (=)',
		parameterPath: 'ptt',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'receiver',
		displayName: 'Receiver',
		queryParam: 'receiver',
		type: 'string',
		default: '',
		description: 'Filter on receiver property (=)',
		parameterPath: 'receiver',
	},
	{
		group: 'filters',
		groupDisplayName: 'Filters',
		name: 'sender',
		displayName: 'Sender',
		queryParam: 'sender',
		type: 'string',
		default: '',
		description: 'Filter on sender property (=)',
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
		description: 'Filter on tag property (=)',
		parameterPath: 'tag',
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Batch ID',
			name: 'batchID',
			type: 'string',
			default: '',
			description: 'Filter on batch ID property (=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime From',
			name: 'creationDatetimeFrom',
			type: 'string',
			default: '',
			description: 'Filter on creationDatetime property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime To',
			name: 'creationDatetimeTo',
			type: 'string',
			default: '',
			description: 'Filter on creationDatetime property (<=)',
			displayOptions,
		},
		{
			displayName: 'Delivery Receipt',
			name: 'deliveryReceipt',
			type: 'number',
			default: 0,
			description: 'Filter on deliveryReceipt property (=)',
			displayOptions,
		},
		{
			displayName: 'Differed Delivery',
			name: 'differedDelivery',
			type: 'number',
			default: 0,
			description: 'Filter on differedDelivery property (=)',
			displayOptions,
		},
		{
			displayName: 'Message ID',
			name: 'messageID',
			type: 'string',
			default: '',
			description: 'Filter on message ID property (=)',
			displayOptions,
		},
		{
			displayName: 'Ptt',
			name: 'ptt',
			type: 'number',
			default: 0,
			description: 'Filter on ptt property (=)',
			displayOptions,
		},
		{
			displayName: 'Receiver',
			name: 'receiver',
			type: 'string',
			default: '',
			description: 'Filter on receiver property (=)',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			description: 'Filter on sender property (=)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Filter on tag property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/outgoing operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/outgoing
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const qs = buildFilterQuery(this, _itemIndex ?? 0, OUTGOING_LIST_FILTERS);
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/outgoing`,
		qs,
	)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}
