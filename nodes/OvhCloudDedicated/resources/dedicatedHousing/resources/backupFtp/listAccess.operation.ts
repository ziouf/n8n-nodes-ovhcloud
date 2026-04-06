import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief List Backup FTP Access ACLs operation for Dedicated Housing
 *
 * Lists all authorized IP blocks for the backup FTP of a Dedicated Housing service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/access
 */
export function descriptionBackupFtpListAccess(displayOptions: IDisplayOptions): INodeProperties[] {
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
 * Executes the List Backup FTP Access ACLs operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing authorized IP blocks
 */
export async function executeBackupFtpListAccess(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const acls = (await client.httpGet(
		`/dedicated/housing/${serviceName}/features/backupFTP/access`,
	)) as IDataObject[];

	return this.helpers.returnJsonArray(acls);
}
