import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'Database name (like mydb.mysql.db or mydb.postgres.db)',
			displayOptions,
		},
		{
			displayName: 'Copy ID',
			name: 'copyId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get a database copy properties
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/copy/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex as number) as string;
	const copyId = this.getNodeParameter('copyId', _itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/database/${encodeURIComponent(serviceName)}/${encodeURIComponent(databaseName)}/copy/${encodeURIComponent(copyId)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
