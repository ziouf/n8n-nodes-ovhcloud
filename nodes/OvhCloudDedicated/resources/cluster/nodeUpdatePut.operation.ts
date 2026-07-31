import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Cluster Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The cluster service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'clusterListGet' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'my-cluster',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Node ID',
			name: 'nodeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The node identifier to update',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
		{
			displayName: 'Node Properties',
			name: 'node',
			type: 'json',
			default: '{}',
			description: 'New node properties to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cluster Node operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/cluster/{serviceName}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const nodeId = (this.getNodeParameter('nodeId', 0) as string) || '';
	const node = this.getNodeParameter('node', 0) as IDataObject;
	await client.httpPut(`/dedicated/cluster/${serviceName}/node/${nodeId}`, node);
	return this.helpers.returnJsonArray([{ nodeId, success: true }]);
}
