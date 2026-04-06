import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Create Backup FTP operation for Dedicated Housing
 *
 * Creates a backup FTP space for a specific Dedicated Housing service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP
 */
export function descriptionBackupFtpCreate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Housing service. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a service...',
					typeOptions: {
						searchListMethod: 'getDedicatedHousingServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Create Backup FTP operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created backup FTP info
 */
export async function executeBackupFtpCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPost(
		`/dedicated/housing/${serviceName}/features/backupFTP`,
	)) as IDataObject;

	return [{ json: response }];
}
