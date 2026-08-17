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
	];
}

/**
 * Executes the List Volume Capability Types operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/capability/getByRegionName?region={region}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	let url = `/publicCloud/project/${projectId}/blockStorage/capability/getByRegionName`;

	const region = (this.getNodeParameter('region', _itemIndex ?? 0) || '') as string;
	if (region && region !== '') {
		url += `?region=${encodeURIComponent(region)}`;
	}

	const data = (await client.httpGet(url)) as unknown[];

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
