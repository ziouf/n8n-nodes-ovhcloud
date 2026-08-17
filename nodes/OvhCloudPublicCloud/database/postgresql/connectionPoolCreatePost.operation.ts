import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Database ID',
			name: 'databaseId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Database name',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 10,
			required: true,
			description: 'Connection pool size',
			displayOptions,
		},
		{
			displayName: 'Mode',
			name: 'mode',
			type: 'string',
			default: '',
			description: 'Connection pool mode (session, transaction, statement)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create PostgreSQL Connection Pool operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const databaseId = this.getNodeParameter('databaseId', _itemIndex ?? 0) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') || '') as string;
	const size = (this.getNodeParameter('size', _itemIndex ?? 0, '') || '') as string;
	const mode = (this.getNodeParameter('mode', _itemIndex ?? 0, '') || '') as string;
	const body: IDataObject = {};
	if (userId) body.userId = userId;
	if (databaseId) body.databaseId = databaseId;
	if (name) body.name = name;
	if (size) body.size = size;
	if (mode) body.mode = mode;
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/connectionPool`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
