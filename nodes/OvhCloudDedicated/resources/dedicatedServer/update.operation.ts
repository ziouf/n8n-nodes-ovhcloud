import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update Dedicated Server operation
 *
 * Updates properties of a specific dedicated server.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}
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
			displayName: 'Monitoring',
			name: 'monitoring',
			type: 'boolean',
			default: false,
			description: 'Whether to enable monitoring on the server',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Custom name for the server',
			displayOptions,
		},
		{
			displayName: 'Boot ID',
			name: 'bootId',
			type: 'number',
			default: undefined,
			description: 'Boot ID to use for the server',
			displayOptions,
		},
		{
			displayName: 'Commercial Range',
			name: 'commercialRange',
			type: 'string',
			default: '',
			description: 'Commercial range of the server',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Dedicated Server operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const body: IDataObject = {};
	const monitoring = this.getNodeParameter('monitoring', 0, false) as boolean;
	const name = this.getNodeParameter('name', 0, '') as string;
	const bootId = this.getNodeParameter('bootId', 0, undefined) as number | undefined;
	const commercialRange = this.getNodeParameter('commercialRange', 0, '') as string;

	if (monitoring) body.monitoring = monitoring;
	if (name) body.name = name;
	if (bootId !== undefined) body.bootId = bootId;
	if (commercialRange) body.commercialRange = commercialRange;

	const data = (await client.httpPut(`/dedicated/server/${serviceName}`, body)) as IDataObject;
	return [{ json: data }];
}
