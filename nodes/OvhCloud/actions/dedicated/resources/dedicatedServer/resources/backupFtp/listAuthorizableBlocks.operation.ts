import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief List Authorizable Blocks operation for Dedicated Server
 *
 * Lists IP blocks that can be authorized for backup FTP access.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks
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
	];
}

/**
 * Executes the List Authorizable Blocks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/features/backupFTP/authorizableBlocks`,
	)) as IDataObject[];

	return data.map((item) => ({ json: item }));
}
