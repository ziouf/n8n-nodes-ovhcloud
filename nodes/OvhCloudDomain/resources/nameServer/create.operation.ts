import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create Name Server operation
 *
 * Creates a new name server for a domain.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/nameServer
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the domain. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a domain...',
					typeOptions: { searchListMethod: 'getDomainServices', searchable: true },
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
			description: 'The name server hostname',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Optional IP address for the name server',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Name Server operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const server = this.getNodeParameter('server', 0) as string;
	const ip = this.getNodeParameter('ip', 0, '') as string;

	const body: IDataObject = { server };
	if (ip) body.ip = ip;

	const data = (await client.httpPost(`/domain/${serviceName}/nameServer`, body)) as IDataObject;
	return [{ json: data }];
}
