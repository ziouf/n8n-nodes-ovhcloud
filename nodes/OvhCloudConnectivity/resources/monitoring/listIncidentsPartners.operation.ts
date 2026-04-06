import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List generic incidents (partners).
 *
 * HTTP method: GET
 * Endpoint: /connectivity/monitoring/genericIncident/partners
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Creation Date',
			name: 'creationDate',
			type: 'dateTime',
			default: '',
			description: 'Filter by creation date',
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
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{
					name: 'Detected',
					value: 'detected',
				},
				{
					name: 'Validated',
					value: 'validated',
				},
				{
					name: 'Closed',
					value: 'closed',
				},
			],
			default: 'detected',
			description: 'Filter by incident status',
			displayOptions,
		},
	];
}

/**
 * Executes the List Incidents Partners operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
	const creationDate = this.getNodeParameter('creationDate', 0, '') as string;
	const endDate = this.getNodeParameter('endDate', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	if (creationDate) qs.creationDate = creationDate;
	if (endDate) qs.endDate = endDate;
	if (status) qs.status = status;
	const data = (await client.httpGet(
		'/connectivity/monitoring/genericIncident/partners',
		qs,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
