import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update Backup FTP Access operation for Dedicated Server
 *
 * Updates an existing ACL for the backup FTP service.
 *
 * HTTP method: PUT
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
			description: 'The IP block to update ACL for',
			displayOptions,
		},
		{
			displayName: 'CIFS',
			name: 'cifs',
			type: 'boolean',
			default: false,
			description: 'Whether to enable CIFS access',
			displayOptions,
		},
		{
			displayName: 'NFS',
			name: 'nfs',
			type: 'boolean',
			default: false,
			description: 'Whether to enable NFS access',
			displayOptions,
		},
		{
			displayName: 'FTP',
			name: 'ftp',
			type: 'boolean',
			default: false,
			description: 'Whether to enable FTP access',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Backup FTP Access operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;

	const body: IDataObject = {};
	const cifs = this.getNodeParameter('cifs', 0, false) as boolean;
	const nfs = this.getNodeParameter('nfs', 0, false) as boolean;
	const ftp = this.getNodeParameter('ftp', 0, false) as boolean;

	if (cifs) body.cifs = cifs;
	if (nfs) body.nfs = nfs;
	if (ftp) body.ftp = ftp;

	const response = (await client.httpPut(
		`/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
