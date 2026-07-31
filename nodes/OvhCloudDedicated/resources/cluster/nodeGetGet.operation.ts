import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
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
			description: 'The node identifier',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cluster Node operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/{serviceName}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const nodeId = (this.getNodeParameter('nodeId', 0) as string) || '';
	const data = (await client.httpGet(`/dedicated/cluster/${serviceName}/node/${nodeId}`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
