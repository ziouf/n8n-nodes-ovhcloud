import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief List Backup FTP Authorizable Blocks operation for Dedicated Housing
 *
 * Retrieves the list of IP blocks that can be authorized for backup FTP access.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks
 */
export function descriptionBackupFtpListAuthorizableBlocks(
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
	];
}

/**
 * Executes the List Backup FTP Authorizable Blocks operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing authorizable IP blocks
 */
export async function executeBackupFtpListAuthorizableBlocks(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const blocks = (await client.httpGet(
		`/dedicated/housing/${serviceName}/features/backupFTP/authorizableBlocks`,
	)) as IDataObject[];

	return this.helpers.returnJsonArray(blocks);
}
