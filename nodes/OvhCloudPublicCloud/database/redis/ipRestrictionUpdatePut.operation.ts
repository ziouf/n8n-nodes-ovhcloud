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
			description: 'The Redis cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block to update (e.g. 10.0.0.0/24)',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the ip restriction',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Redis IP Restriction operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/redis/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {};
	if (description) body.description = description;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/redis/${clusterId}/ipRestriction/${encodeURIComponent(ipBlock)}`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
