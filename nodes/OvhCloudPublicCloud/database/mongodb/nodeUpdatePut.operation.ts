import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The database service name',
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
		{
			displayName: 'Role',
			name: 'role',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Update MongoDB Node operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const nodeId = this.getNodeParameter('nodeId', 0) as string;
	const role = this.getNodeParameter('role', 0, '') as string;

	const body: IDataObject = {
    role: role || undefined
  };
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/node/${nodeId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
