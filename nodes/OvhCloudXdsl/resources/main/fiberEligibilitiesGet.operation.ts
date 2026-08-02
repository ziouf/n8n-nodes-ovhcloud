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
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: "active",
			options: [
				{ name: 'Active', value: 'active' },
				{ name: 'Pending', value: 'pending' },
			],
			description: 'Filter the eligibilities by status',
			displayOptions,
		},
	];
}

/**
 * List the fiber eligibilities for an xDSL service.
 *
 * HTTP method: GET
 * Endpoint: /xdsl/{serviceName}/fiberEligibilities
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const status = (this.getNodeParameter('status', 0, '') as string) || '';

	const qs: IDataObject = {};
	if (status) qs.status = status;

	const data = (await client.httpGet(`/xdsl/${encodeURIComponent(serviceName)}/fiberEligibilities`, qs)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { id: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
