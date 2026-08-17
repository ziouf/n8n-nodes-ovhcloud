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
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Nodeid',
			name: 'nodeId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'NodeId ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get a node.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;
const data = (await client.httpGet(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/node/${nodeId}`, undefined)) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
