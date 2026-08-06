import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The database service name',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Create MongoDB Cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mongodb
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const description = this.getNodeParameter('description', 0, '') as string;
	const plan = this.getNodeParameter('plan', 0, '') as string;
	const version = this.getNodeParameter('version', 0, '') as string;

	const body: IDataObject = {
    description: description || undefined,
    plan: plan || undefined,
    version: version || undefined
  };
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/mongodb`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
