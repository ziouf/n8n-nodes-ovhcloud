import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Reinstall Dedicated Server operation
 *
 * Installs or reinstalls an OS on a specific dedicated server.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/reinstall
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
			displayName: 'Reinstall Details (JSON)',
			name: 'reinstallDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Reinstall configuration object (template, language, partition scheme, etc.)',
			displayOptions,
		},
	];
}

/**
 * Executes the Reinstall operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const reinstallDetails = this.getNodeParameter('reinstallDetails', 0) as IDataObject;

	const data = (await client.httpPost(
		`/dedicated/server/${serviceName}/reinstall`,
		reinstallDetails,
	)) as IDataObject;
	return [{ json: data }];
}
