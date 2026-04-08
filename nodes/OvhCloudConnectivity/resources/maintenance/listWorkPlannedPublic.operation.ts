import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List planned maintenance work (public).
 *
 * HTTP method: GET
 * Endpoint: /connectivity/maintenance/workPlanned/public
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Begin Date',
			name: 'beginDate',
			type: 'dateTime',
			default: '',
			description: 'Filter by start date',
			displayOptions,
		},
		{
			displayName: 'End Date',
			name: 'endDate',
			type: 'dateTime',
			default: '',
			description: 'Filter by end date',
			displayOptions,
		},
	];
}

/**
 * Executes the List Work Planned Public operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
	const beginDate = this.getNodeParameter('beginDate', 0, '') as string;
	const endDate = this.getNodeParameter('endDate', 0, '') as string;
	if (beginDate) qs.beginDate = beginDate;
	if (endDate) qs.endDate = endDate;
	const data = (await client.httpGet(
		'/connectivity/maintenance/workPlanned/public',
		qs,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
