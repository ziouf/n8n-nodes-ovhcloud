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
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'The region where the cluster will be deployed',
			displayOptions,
		},
		{
			displayName: 'Flavor Name',
			name: 'flavorName',
			type: 'string',
			default: '',
			required: true,
			description: 'The flavor name for the cluster nodes',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'The Cassandra version to deploy',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cassandra Cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/cassandra
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const region = (this.getNodeParameter('region', _itemIndex ?? 0, '') || '') as string;
	const flavorName = (this.getNodeParameter('flavorName', _itemIndex ?? 0, '') || '') as string;
	const version = (this.getNodeParameter('version', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (region) body.region = region;
	if (flavorName) body.flavorName = flavorName;
	if (version) body.version = version;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/cassandra`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
