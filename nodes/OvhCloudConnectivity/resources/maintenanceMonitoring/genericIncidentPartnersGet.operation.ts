import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Creation Date',
			name: 'creationDate',
			type: 'string',
			default: '',
			description: 'Only list the incidents created after this date',
			displayOptions,
		},
		{
			displayName: 'End Date',
			name: 'endDate',
			type: 'string',
			default: '',
			description: 'Only list the incidents closed before this date',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: "closed",
			options: [
				{ name: 'Closed', value: 'closed' },
				{ name: 'Detected', value: 'detected' },
				{ name: 'Validated', value: 'validated' },
			],
			description: 'Filter by incident status',
			displayOptions,
		},
	];
}

/**
 * List the detected, validated and recently closed generic incidents, reserved for partners.
 *
 * HTTP method: GET
 * Endpoint: /connectivity/monitoring/genericIncident/partners
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const creationDate = (this.getNodeParameter('creationDate', _itemIndex ?? 0, '') as string) || '';
	const endDate = (this.getNodeParameter('endDate', _itemIndex ?? 0, '') as string) || '';
	const status = (this.getNodeParameter('status', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (creationDate) qs.creationDate = creationDate;
	if (endDate) qs.endDate = endDate;
	if (status) qs.status = status;

	const data = (await client.httpGet(`/connectivity/monitoring/genericIncident/partners`, qs)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { id: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
