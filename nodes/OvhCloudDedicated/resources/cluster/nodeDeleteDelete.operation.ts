import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Cluster Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
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
			description: 'The node identifier to delete',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Cluster Node operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/cluster/{serviceName}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const nodeId = (this.getNodeParameter('nodeId', 0) as string) || '';
	await client.httpDelete(`/dedicated/cluster/${serviceName}/node/${nodeId}`);
	return this.helpers.returnJsonArray([{ nodeId, success: true }]);
}
