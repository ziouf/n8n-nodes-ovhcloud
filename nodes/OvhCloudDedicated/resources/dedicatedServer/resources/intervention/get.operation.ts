import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Get Intervention operation for Dedicated Server
 *
 * Retrieves details of a specific intervention.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/intervention/{interventionId}
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
			displayName: 'Intervention ID',
			name: 'interventionId',
			type: 'number',
			default: undefined,
			required: true,
			description: 'The ID of the intervention',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const interventionId = this.getNodeParameter('interventionId', 0) as number;
	const data = (await client.httpGet(`/dedicated/server/${serviceName}/intervention/${interventionId}`)) as IDataObject;
	return [{ json: data }];
}
