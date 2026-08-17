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
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Filter by region',
			displayOptions,
		},
	];
}

/**
 * Executes the List Volume Snapshots operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{projectId}/volume/snapshot
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const qs: Record<string, string> = {};
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	if (region) qs['region'] = region;

	const data = (await client.httpGet(
		`/cloud/project/${projectId}/volume/snapshot`,
		qs,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
