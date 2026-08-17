import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Create MongoDB IP Restriction operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/ipRestriction
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ip = this.getNodeParameter('ip', _itemIndex ?? 0, '') as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    ip: ip || undefined,
    description: description || undefined
  };
	const client = getClient(this);
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/ipRestriction`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
