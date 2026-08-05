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
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
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
 * Executes the Update Grafana Cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/grafana/{clusterId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const description = (this.getNodeParameter('description', 0) || '') as string;
	const plan = (this.getNodeParameter('plan', 0) || '') as string;
	const version = (this.getNodeParameter('version', 0) || '') as string;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (plan) body.plan = plan;
	if (version) body.version = version;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/grafana/${clusterId}`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
