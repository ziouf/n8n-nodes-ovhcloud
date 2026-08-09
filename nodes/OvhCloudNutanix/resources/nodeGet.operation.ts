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
			displayName: 'Nutanix Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Nutanix cluster service name (e.g. nutanix-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNutanixServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'nutanix-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Server',
			name: 'server',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the server associated with the node',
			displayOptions,
		},
	];
}

/**
 * Retrieve detailed information about a specific node in a Nutanix cluster.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/{serviceName}/nodes/{server}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const server = this.getNodeParameter('server', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/nutanix/${encodeURIComponent(serviceName)}/nodes/${encodeURIComponent(server)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
