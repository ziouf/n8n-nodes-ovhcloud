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
			description: 'Only list the incidents finished before this date',
			displayOptions,
		},
	];
}

/**
 * List the global xDSL incidents.
 *
 * HTTP method: GET
 * Endpoint: /xdsl/incidents
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const creationDate = (this.getNodeParameter('creationDate', _itemIndex ?? 0, '') as string) || '';
	const endDate = (this.getNodeParameter('endDate', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (creationDate) qs.creationDate = creationDate;
	if (endDate) qs.endDate = endDate;

	const data = (await client.httpGet(`/xdsl/incidents`, qs)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { id: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
