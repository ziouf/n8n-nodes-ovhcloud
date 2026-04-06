import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List clusters for a DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/cluster
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Name Pattern',
			name: 'namePattern',
			type: 'string',
			default: '',
			description: 'Filter clusters by name pattern',
			displayOptions,
		},
	];
}

/**
 * Executes the List Clusters operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const namePattern = this.getNodeParameter('namePattern', 0, '') as string;
	const qs: IDataObject = {};
	if (namePattern) qs.namePattern = namePattern;
	const data = (await client.httpGet(`/dbaas/logs/${serviceName}/cluster`, qs)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
