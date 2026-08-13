import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the List Instances operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/instance
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/publicCloud/project/${projectId}/instance`)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
