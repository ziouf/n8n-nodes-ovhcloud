import { projectIdLocator } from '../../../../shared/nodes/locators';
import { SERVICE_NAME } from '../../serviceName';
import type {
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
			...SERVICE_NAME,
			displayOptions,
		},
	{
		displayName: 'Nodeid',
		name: 'nodeId',
		type: 'string',
		default: '',
		required: true,
		description: 'Node ID',
		displayOptions,
	},
	];
}

/**
 * Executes the Delete Kafka Node operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/kafka/serviceName/node/nodeId
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;

	await client.httpDelete(`/publicCloud/project/${projectId}/kafka/${serviceName}/node/${nodeId}`);

	return this.helpers.returnJsonArray([]);
}