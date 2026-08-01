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
 * Executes the Put UpdateCluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/{serviceName}/cluster/{clusterId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const clusterId = this.getNodeParameter('clusterId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/dbaas/' + serviceName + '/cluster/' + clusterId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
