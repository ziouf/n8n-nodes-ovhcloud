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
			description: 'The Cassandra cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block to add (e.g. 192.168.1.0/24)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cassandra IP Restriction operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/ipRestriction
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ipBlock = (this.getNodeParameter('ipBlock', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (ipBlock) body.ipBlock = ipBlock;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/ipRestriction`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
