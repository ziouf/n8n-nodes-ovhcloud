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
			description: 'The MySQL cluster ID',
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
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			description: 'Plan of the cluster',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Version of the engine deployed on the cluster',
			displayOptions,
		},
	];
}

/**
 * Executes the Update MySQL Cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;
	const plan = (this.getNodeParameter('plan', _itemIndex ?? 0) || '') as string;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (plan) body.plan = plan;
	if (version) body.version = version;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}`,
		body as IDataObject,
	)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data]);
}
