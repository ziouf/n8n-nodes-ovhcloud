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
			name: "clusterId",
			type: "string",
			required: true,
			default: "",
			description: "The clusterId parameter",
			displayOptions,
		}
	];
}

/**
 * Executes the List Kind operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/opensearch/{clusterId}/log/kind
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0, '') as string;
	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/opensearch/${clusterId}/log/kind`)) as IDataObject;

	if (Array.isArray(data)) {
		return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
	}
	return this.helpers.returnJsonArray([data]);
}
