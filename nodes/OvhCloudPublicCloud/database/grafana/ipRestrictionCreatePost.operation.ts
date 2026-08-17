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
			description: 'The Grafana cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block to whitelist',
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
 * Executes the Create Grafana IP Restriction operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ip = this.getNodeParameter('ip', _itemIndex ?? 0) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = { ip };
	if (description) body.description = description;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/grafana/${clusterId}/ipRestriction`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
