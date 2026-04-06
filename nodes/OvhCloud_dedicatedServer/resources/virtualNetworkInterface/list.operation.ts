import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List Virtual Network Interfaces operation for Dedicated Server
 *
 * Lists all VNIs for a dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/virtualNetworkInterface
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the dedicated server. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a dedicated server...',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
			],
			displayOptions,
		},
		{
			displayName: 'Enabled',
			name: 'enabled',
			type: 'boolean',
			default: false,
			description: 'Whether the VNI is enabled',
			displayOptions,
		},
		{
			displayName: 'Mode',
			name: 'mode',
			type: 'string',
			default: '',
			description: 'Filter by VNI mode',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter by VNI name',
			displayOptions,
		},
		{
			displayName: 'VRack',
			name: 'vrack',
			type: 'string',
			default: '',
			description: 'Filter by vRack',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const qs: IDataObject = {};
	const enabled = this.getNodeParameter('enabled', 0, undefined) as boolean | undefined;
	const mode = this.getNodeParameter('mode', 0, '') as string;
	const name = this.getNodeParameter('name', 0, '') as string;
	const vrack = this.getNodeParameter('vrack', 0, '') as string;

	if (enabled !== undefined) qs.enabled = enabled;
	if (mode) qs.mode = mode;
	if (name) qs.name = name;
	if (vrack) qs.vrack = vrack;

	const data = (await client.httpGet(`/dedicated/server/${serviceName}/virtualNetworkInterface`, qs)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
