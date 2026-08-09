import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
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
			displayOptions,
		},
		{
			displayName: 'Dump URL',
			name: 'dumpUrl',
			type: 'string',
			default: '',
			required: true,
			description: 'URL of the SQL dump file to import',
			displayOptions,
		},
	];
}

/**
 * Import SQL dump into database
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/database/{serviceName}/{databaseName}/import
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const databaseName = this.getNodeParameter('databaseName', _itemIndex ?? 0) as string;
	const dumpUrl = this.getNodeParameter('dumpUrl', _itemIndex ?? 0) as string;
	const data = await client.httpPost(
		`/hosting/web/database/${serviceName}/${databaseName}/import`,
		{ url: dumpUrl },
	);
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
