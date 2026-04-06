import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Change Backup FTP Password operation for Dedicated Housing
 *
 * Changes the backup FTP password for a Dedicated Housing service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/password
 */
export function descriptionBackupFtpChangePassword(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
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
		{
			displayName: 'Password',
			name: 'password',
			description: 'The new backup FTP password',
			type: 'string',
			required: true,
			default: '',
			typeOptions: {
				password: true,
			},
			displayOptions,
		},
	];
}

/**
 * Executes the Change Backup FTP Password operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function executeBackupFtpChangePassword(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const response = (await client.httpPost(
		`/dedicated/housing/${serviceName}/features/backupFTP/password`,
		{ password },
	)) as IDataObject;

	return [{ json: response }];
}
