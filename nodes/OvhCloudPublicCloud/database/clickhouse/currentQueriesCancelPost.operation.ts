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
		displayName: 'Pid',
		name: 'pid',
		type: 'number',
		default: 0,
		
		description: 'Database server connection ID',
		displayOptions,
	},
{
		displayName: 'Terminate',
		name: 'terminate',
		type: 'boolean',
		default: false,
		
		description: 'Whether to request immediate termination',
		displayOptions,
	},
	];
}

/**
 * Executes the Cancel Clickhouse Query operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/currentQueries/cancel
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const pid = this.getNodeParameter('pid', _itemIndex ?? 0, 0) as number;
	const terminate = this.getNodeParameter('terminate', _itemIndex ?? 0, false) as boolean;

	const body: IDataObject = {};
	if (pid) body.pid = pid;
	body.terminate = terminate;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/currentQueries/cancel`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

