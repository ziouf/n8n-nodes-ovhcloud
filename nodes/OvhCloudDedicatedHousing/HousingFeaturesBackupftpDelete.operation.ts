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
 * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/housing/{serviceName}/features/backupFTP
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dedicated/housing/' + encodeURIComponent(serviceName) + '/features/backupFTP')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
