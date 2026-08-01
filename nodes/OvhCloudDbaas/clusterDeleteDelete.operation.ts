import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The clusterId identifier',
		},

	];
}

/**
 * Executes the Delete DeleteCluster operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/{serviceName}/cluster/{clusterId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const clusterId = this.getNodeParameter('clusterId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dbaas/' + serviceName + '/cluster/' + clusterId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
