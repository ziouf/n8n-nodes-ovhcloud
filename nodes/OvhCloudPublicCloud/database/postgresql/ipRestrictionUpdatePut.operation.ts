import { projectIdLocator } from '../../../../shared/nodes/locators';
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
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'IP block (CIDR notation)',
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP block (CIDR notation)',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the cluster',
			displayOptions,
		},
	];
}

/**
 * Executes the Update PostgreSQL IP Restriction operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;
	const ip = (this.getNodeParameter('ip', _itemIndex ?? 0, '') || '') as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0, '') || '') as string;
	const body: IDataObject = {};
	if (ip) body.ip = ip;
	if (description) body.description = description;
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/ipRestriction/${ipBlock}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
