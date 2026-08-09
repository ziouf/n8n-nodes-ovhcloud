import type {
	IExecuteFunctions,
	IDataObject,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Edits an IP ACL rule for backup FTP access control on a dedicated server. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns123456.ip-123-45-678.eu',
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
			description: 'The IP block to update in backup FTP ACL (e.g. 123.45.678.0/24)',
			placeholder: 'e.g. 123.45.678.0/24',
			displayOptions,
		},
		{
			displayName: 'FTP Access',
			name: 'ftp',
			type: 'boolean',
			default: false,
			description: 'Whether to allow FTP protocol access for this IP block (optional)',
			displayOptions,
		},
		{
			displayName: 'CIFS/SMB Access',
			name: 'cifs',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to allow CIFS/SMB protocol access for this IP block (required)',
			displayOptions,
		},
		{
			displayName: 'NFS Access',
			name: 'nfs',
			type: 'boolean',
			default: false,
			description: 'Whether to allow NFS protocol access for this IP block (optional)',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const ipBlock = (this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string) || '';

	const ftp = this.getNodeParameter('ftp', _itemIndex ?? 0) as boolean | undefined;
	const cifs = (this.getNodeParameter('cifs', _itemIndex ?? 0) as boolean) ?? false;
	const nfs = this.getNodeParameter('nfs', _itemIndex ?? 0) as boolean | undefined;

	const body: IDataObject = {};
	if (ftp !== undefined) body.ftp = ftp;
	body.cifs = cifs ?? false;
	if (nfs !== undefined) body.nfs = nfs;

	await client.httpPut(
		`/dedicated/server/${serviceName}/features/backupFTP/access/edit?ipBlock=${encodeURIComponent(ipBlock)}`,
		body,
	);

	return this.helpers.returnJsonArray([{ serviceName, ipBlock, success: true }]);
}
