import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Delete Backup FTP Access ACL operation for Dedicated Housing
 *
 * Revokes an ACL entry for the backup FTP of a Dedicated Housing service.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
 */
export function descriptionBackupFtpDeleteAccess(
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
			displayName: 'IP Block',
			name: 'ipBlock',
			description: 'The IP block to revoke (e.g., 192.168.1.0/24)',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Backup FTP Access ACL operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function executeBackupFtpDeleteAccess(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;

	await client.httpDelete(`/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`);

	return [{ json: { success: true } }];
}
