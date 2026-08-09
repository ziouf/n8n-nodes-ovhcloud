import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Veeam Cloud Connect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Veeam Cloud Connect service (e.g. vcc-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVeeamCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vcc-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter tasks by name (LIKE)',
			displayOptions,
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'string',
			default: '',
			description: 'Filter tasks by state (=)',
			displayOptions,
		},
	];
}

/**
 * List tasks associated with a specific Veeam Cloud Connect service.
 *
 * HTTP method: GET
 * Endpoint: /veeamCloudConnect/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') as string) || '';
	const state = (this.getNodeParameter('state', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (name) qs.name = name;
	if (state) qs.state = state;
	const data = (await client.httpGet(
		`/veeamCloudConnect/${encodeURIComponent(serviceName)}/task`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { taskId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
