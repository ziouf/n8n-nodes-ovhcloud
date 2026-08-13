import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Begin Date',
			name: 'beginDate',
			type: 'string',
			default: '',
			description: 'Only list the works started after this date',
			displayOptions,
		},
		{
			displayName: 'End Date',
			name: 'endDate',
			type: 'string',
			default: '',
			description: 'Only list the works finished before this date',
			displayOptions,
		},
	];
}

/**
 * List the planned works published by the operators.
 *
 * HTTP method: GET
 * Endpoint: /connectivity/maintenance/workPlanned/public
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const beginDate = (this.getNodeParameter('beginDate', _itemIndex ?? 0, '') as string) || '';
	const endDate = (this.getNodeParameter('endDate', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (beginDate) qs.beginDate = beginDate;
	if (endDate) qs.endDate = endDate;

	const data = (await client.httpGet(`/connectivity/maintenance/workPlanned/public`, qs)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { id: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
