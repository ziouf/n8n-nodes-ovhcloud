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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'flavor',
			name: 'flavor',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Role',
			name: 'role',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Create MongoDB Node operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/node
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const flavor = this.getNodeParameter('flavor', 0, '') as string;
	const region = this.getNodeParameter('region', 0, '') as string;
	const role = this.getNodeParameter('role', 0, '') as string;

	const body: IDataObject = {
    flavor: flavor || undefined,
    region: region || undefined,
    role: role || undefined
  };
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/node`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
