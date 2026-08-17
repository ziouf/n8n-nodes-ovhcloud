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
 * Executes the Create MySQL Cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mysql
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;
	const plan = (this.getNodeParameter('plan', _itemIndex ?? 0) || '') as string;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (plan) body.plan = plan;
	if (version) body.version = version;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/mysql`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
