import { SERVICE_NAME } from '../../serviceName';
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
			...SERVICE_NAME,
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
			displayName: 'Node ID',
			name: 'nodeId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}
/**
 * Executes the Delete MongoDB Node operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;
	const client = getClient(this);
	const data = (await client.httpDelete(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/node/${nodeId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
