import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update Firewall operation for Dedicated Server
 *
 * Updates firewall properties for a dedicated server.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/features/firewall
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
			displayName: 'State',
			name: 'state',
			type: 'options',
			options: [
				{ name: 'Enabled', value: 'enabled' },
				{ name: 'Disabled', value: 'disabled' },
			],
			default: 'enabled',
			description: 'Firewall state',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const state = this.getNodeParameter('state', 0) as string;

	const body: IDataObject = { state };
	const response = (await client.httpPut(`/dedicated/server/${serviceName}/features/firewall`, body)) as IDataObject;
	return [{ json: response }];
}
