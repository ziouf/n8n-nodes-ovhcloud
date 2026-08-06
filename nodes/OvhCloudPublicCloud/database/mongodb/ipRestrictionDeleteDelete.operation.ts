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
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}
/**
 * Executes the Delete MongoDB IP Restriction operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/ipRestriction/${ipBlock}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
