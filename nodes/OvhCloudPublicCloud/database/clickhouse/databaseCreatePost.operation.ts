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
		displayName: 'Default Db',
		name: 'defaultDb',
		type: 'boolean',
		default: false,
		
		description: 'Whether the database is the default one',
		displayOptions,
	},
	];
}

/**
 * Executes the Create Clickhouse Database operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/database
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') || '') as string;
	const defaultDb = this.getNodeParameter('defaultDb', _itemIndex ?? 0, false) as boolean;

	const body: IDataObject = {};
	if (name) body.name = name;
	body.defaultDb = defaultDb;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/database`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

