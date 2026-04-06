import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Delete Option operation for Dedicated Server
 *
 * Releases an option from a dedicated server.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/server/{serviceName}/option/{option}
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
			displayName: 'Option',
			name: 'option',
			type: 'string',
			default: '',
			required: true,
			description: 'The option name to release',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const option = this.getNodeParameter('option', 0) as string;
	const response = (await client.httpDelete(`/dedicated/server/${serviceName}/option/${option}`)) as IDataObject;
	return [{ json: response }];
}
