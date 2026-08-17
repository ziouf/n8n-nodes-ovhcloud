import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
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
			description: 'The MySQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block (e.g. 192.168.1.0/24)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get MySQL IP Restriction operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/ipRestriction/${encodeURIComponent(ipBlock)}`,
	)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
