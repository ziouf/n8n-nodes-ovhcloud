import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Update Backup FTP Access ACL operation for Dedicated Housing
 *
 * Updates an existing ACL entry for the backup FTP of a Dedicated Housing service.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
 */
export function descriptionBackupFtpUpdateAccess(
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
			description: 'The IP block to update (e.g., 192.168.1.0/24)',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'CIFS',
			name: 'cifs',
			description: 'Whether to allow CIFS access',
			type: 'boolean',
			default: false,
			displayOptions,
		},
		{
			displayName: 'NFS',
			name: 'nfs',
			description: 'Whether to allow NFS access',
			type: 'boolean',
			default: false,
			displayOptions,
		},
		{
			displayName: 'FTP',
			name: 'ftp',
			description: 'Whether to allow FTP access',
			type: 'boolean',
			default: false,
			displayOptions,
		},
	];
}

/**
 * Executes the Update Backup FTP Access ACL operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the updated ACL
 */
export async function executeBackupFtpUpdateAccess(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const cifs = this.getNodeParameter('cifs', 0, false) as boolean;
	const nfs = this.getNodeParameter('nfs', 0, false) as boolean;
	const ftp = this.getNodeParameter('ftp', 0, false) as boolean;

	const response = (await client.httpPut(
		`/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`,
		{ cifs, nfs, ftp },
	)) as IDataObject;

	return [{ json: response }];
}
