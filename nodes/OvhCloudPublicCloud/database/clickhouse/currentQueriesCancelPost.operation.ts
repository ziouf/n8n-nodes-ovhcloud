import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
{
		displayName: 'Public Cloud Project',
		name: 'publicCloudProjectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod: 'getPublicCloudProjects' },
			},
			{
				displayName: 'By ID',
				name: 'name',
				type: 'string',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			},
		],
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', { extractValue: true }) as string;
	const pid = this.getNodeParameter('pid', 0, 0) as number;
	const terminate = this.getNodeParameter('terminate', 0, false) as boolean;

	const body: IDataObject = {};
	if (pid) body.pid = pid;
	body.terminate = terminate;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/currentQueries/cancel`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

