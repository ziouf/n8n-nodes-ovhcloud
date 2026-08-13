import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
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
 * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP/access
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/housing/' + encodeURIComponent(serviceName) + '/features/backupFTP/access')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
