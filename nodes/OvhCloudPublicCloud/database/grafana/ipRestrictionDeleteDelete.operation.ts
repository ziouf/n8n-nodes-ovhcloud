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
			description: 'The Grafana cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block to delete from the restricted IPs (e.g. 10.0.0.0/24)',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Grafana IP Restriction operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;
	await client.httpDelete(
		`/cloud/project/${serviceName}/database/grafana/${clusterId}/ipRestriction/${encodeURIComponent(ipBlock)}`,
	);
	return this.helpers.returnJsonArray([{}]);
}
