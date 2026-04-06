import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Delete Backup FTP Access operation for Dedicated Server
 *
 * Revokes an ACL for the backup FTP service.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
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
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block to revoke ACL for',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Backup FTP Access operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;

	const response = (await client.httpDelete(
		`/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`,
	)) as IDataObject;

	return [{ json: response }];
}
