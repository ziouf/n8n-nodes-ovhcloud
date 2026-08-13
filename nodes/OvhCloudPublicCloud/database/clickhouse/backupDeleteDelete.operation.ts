import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

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
			...serviceNameLocator({
				searchListMethod: 'getPublicCloudProjects',
				displayName: 'Service Name',
				description: 'The database service name',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
	{
		displayName: 'Backupid',
		name: 'backupId',
		type: 'string',
		default: '',
		required: true,
		description: 'Backup ID',
		displayOptions,
	},
	];
}

/**
 * Executes the Delete Clickhouse Backup operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/clickhouse/serviceName/backup/backupId
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const backupId = this.getNodeParameter('backupId', _itemIndex ?? 0) as string;

	await client.httpDelete(`/publicCloud/project/${projectId}/clickhouse/${serviceName}/backup/${backupId}`);

	return this.helpers.returnJsonArray([]);
}