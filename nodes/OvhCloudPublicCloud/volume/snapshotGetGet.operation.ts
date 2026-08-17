import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Snapshot ID',
			name: 'snapshotId',
			type: 'string',
			default: '',
			required: true,
			description: 'The snapshot',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Volume Snapshot Details operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{projectId}/volume/snapshot/{snapshotId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const snapshotId = this.getNodeParameter('snapshotId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/cloud/project/${projectId}/volume/snapshot/${snapshotId}`,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
