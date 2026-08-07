import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Cifs',
			name: 'cifs',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to allow the CIFS (SMB) protocol for this ACL',
		},
		{
			displayName: 'Ftp',
			name: 'ftp',
			type: 'boolean',
			default: false,
			description: 'Whether to allow the FTP protocol for this ACL',
		},
		{
			displayName: 'Ipblock',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP Block specific to this ACL. It musts belong to your server.',
		},
		{
			displayName: 'Nfs',
			name: 'nfs',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to allow the NFS protocol for this ACL',
		},
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your Housing bay',
		},
	];
}

/**
 * Create a new Backup FTP ACL
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/access
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const cifs = this.getNodeParameter('cifs', itemIndex);
	const ipBlock = this.getNodeParameter('ipBlock', itemIndex) as string;
	const nfs = this.getNodeParameter('nfs', itemIndex);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['cifs'] = cifs;
		body['ipBlock'] = ipBlock;
		body['nfs'] = nfs;
	const data = (await client.httpPost('/dedicated/housing/' + encodeURIComponent(serviceName) + '/features/backupFTP/access', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
