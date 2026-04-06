import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List encryption keys for a DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/encryptionKey
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
			description: 'Filter encryption keys by title pattern',
			displayOptions,
		},
	];
}

/**
 * Executes the List Encryption Keys operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const titlePattern = this.getNodeParameter('titlePattern', 0, '') as string;
	const qs: IDataObject = {};
	if (titlePattern) qs.titlePattern = titlePattern;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/encryptionKey`,
		qs,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
