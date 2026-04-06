import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an OpenSearch dashboard for a DBaaS log service.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/osd
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
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			required: true,
			description: 'Title for the dashboard',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description for the dashboard',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Dashboard version',
			displayOptions,
		},
	];
}

/**
 * Executes the Create OpenSearch Dashboard operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		title: this.getNodeParameter('title', 0) as string,
	};
	const description = this.getNodeParameter('description', 0, '') as string;
	const version = this.getNodeParameter('version', 0, '') as string;
	if (description) body.description = description;
	if (version) body.version = version;
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/opensearch/osd`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
