import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [
	{
		...projectIdLocator(),
	}
	];
}

/**
 * Executes the List Valkey clusters in a project operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/${projectId}/cloud/database/valkey
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/publicCloud/project/${projectId}/cloud/database/valkey`)) as unknown[];

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
