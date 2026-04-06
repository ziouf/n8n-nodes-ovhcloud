import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List inputs for a DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/input
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
			displayName: 'Title Pattern',
			name: 'titlePattern',
			type: 'string',
			default: '',
			description: 'Filter inputs by title pattern',
			displayOptions,
		},
	];
}

/**
 * Executes the List Inputs operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const titlePattern = this.getNodeParameter('titlePattern', 0, '') as string;
	const qs: IDataObject = {};
	if (titlePattern) qs.titlePattern = titlePattern;
	const data = (await client.httpGet(`/dbaas/logs/${serviceName}/input`, qs)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
