import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief List Boots operation for Dedicated Server
 *
 * Lists all netboot configurations for a dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/boot
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
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a dedicated server...',
					typeOptions: {
						searchListMethod: 'getDedicatedServerServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Boot Type',
			name: 'bootType',
			type: 'string',
			default: '',
			description: 'Filter by boot type',
			displayOptions,
		},
	];
}

/**
 * Executes the List Boots operation for Dedicated Server.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const qs: IDataObject = {};
	const bootType = this.getNodeParameter('bootType', 0, '') as string;
	if (bootType) qs.bootType = bootType;

	const data = (await client.httpGet(`/dedicated/server/${serviceName}/boot`, qs)) as IDataObject[];

	return data.map((item) => ({ json: item }));
}
