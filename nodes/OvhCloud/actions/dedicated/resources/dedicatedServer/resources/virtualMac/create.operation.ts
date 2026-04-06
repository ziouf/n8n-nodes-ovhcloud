import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Create Virtual MAC operation for Dedicated Server
 *
 * Creates a virtual MAC for a dedicated server.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/virtualMac
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
			displayName: 'IP Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address to associate with the virtual MAC',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of virtual MAC (e.g., vmware, virtualbox, generic)',
			displayOptions,
		},
		{
			displayName: 'Virtual Machine Name',
			name: 'virtualMachineName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the virtual machine',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const ipAddress = this.getNodeParameter('ipAddress', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const virtualMachineName = this.getNodeParameter('virtualMachineName', 0) as string;

	const body: IDataObject = { ipAddress, type, virtualMachineName };
	const response = (await client.httpPost(`/dedicated/server/${serviceName}/virtualMac`, body)) as IDataObject;
	return [{ json: response }];
}
