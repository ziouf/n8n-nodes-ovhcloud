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
		{
			displayName: 'Ahv Ip',
			name: 'ahvIp',
			type: 'string',
			default: '',
			description: 'The IP address of the AHV (Acropolis Hypervisor)',
			displayOptions,
		},
		{
			displayName: 'Cvm Ip',
			name: 'cvmIp',
			type: 'string',
			default: '',
			description: 'The IP address of the CVM (Controller VM)',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'The AOS version to deploy',
			displayOptions,
		},
	];
}

/**
 * Deploy a node in a Nutanix cluster.
 *
 * HTTP method: PUT
 * Endpoint: /nutanix/{serviceName}/nodes/{server}/deploy
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const server = this.getNodeParameter('server', _itemIndex ?? 0) as string;
	const ahvIp = (this.getNodeParameter('ahvIp', _itemIndex ?? 0, '') as string) || '';
	const cvmIp = (this.getNodeParameter('cvmIp', _itemIndex ?? 0, '') as string) || '';
	const version = (this.getNodeParameter('version', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (ahvIp) body.ahvIp = ahvIp;
	if (cvmIp) body.cvmIp = cvmIp;
	if (version) body.version = version;
	await client.httpPut(
		`/nutanix/${encodeURIComponent(serviceName)}/nodes/${encodeURIComponent(server)}/deploy`,
		body,
	);

	return this.helpers.returnJsonArray([{ serviceName, server, success: true }]);
}
