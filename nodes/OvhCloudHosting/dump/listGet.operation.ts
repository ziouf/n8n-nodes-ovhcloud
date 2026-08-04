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
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Database Name Filter',
			name: 'databaseName',
			type: 'string',
			default: '',
			description: 'Filter dumps by source database name',
			displayOptions,
		},
		{
			displayName: 'Orphan Only',
			name: 'orphan',
			type: 'boolean',
			default: false,
			description: 'Whether to only return dumps whose source database was deleted',
			displayOptions,
		},
	];
}

/**
 * List dumps linked to your hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/dump
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const databaseName = this.getNodeParameter('databaseName', itemIndex as number, '') as string;
	const orphan = this.getNodeParameter('orphan', itemIndex as number, false) as boolean;

	const qs: IDataObject = {};
	if (databaseName) {
		qs.databaseName = databaseName;
	}
	if (orphan) {
		qs.orphan = orphan;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/dump`,
		qs,
	)) as unknown;
	return this.helpers.returnJsonArray(
		Array.isArray(data) ? (data as IDataObject[]) : [data as IDataObject],
	);
}
