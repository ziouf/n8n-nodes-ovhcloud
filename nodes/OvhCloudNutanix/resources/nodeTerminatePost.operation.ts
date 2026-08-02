import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
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
 * Terminate a node in a Nutanix cluster.
 *
 * HTTP method: POST
 * Endpoint: /nutanix/{serviceName}/nodes/{server}/terminate
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const server = this.getNodeParameter('server', 0) as string;
	await client.httpPost(
		`/nutanix/${encodeURIComponent(serviceName)}/nodes/${encodeURIComponent(server)}/terminate`,
	);

	return this.helpers.returnJsonArray([{ serviceName, server, success: true }]);
}
