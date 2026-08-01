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
	];
}

/**
 * Executes the Delete Cluster operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/cluster/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	await client.httpDelete(`/dedicated/cluster/${serviceName}`);
	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
