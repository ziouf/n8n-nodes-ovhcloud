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
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Database name',
			displayOptions,
		},
		{
			displayName: 'Default',
			name: 'isDefault',
			type: 'boolean',
			default: false,
			description: 'Whether this is the default database',
			displayOptions,
		},
	];
}

/**
 * Executes the Create PostgreSQL Database operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/database
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const name = (this.getNodeParameter('name', 0, '') || '') as string;
	const isDefault = this.getNodeParameter('isDefault', 0, false) as boolean;
	const body: IDataObject = {};
	if (name) body.name = name;
	body.default = isDefault;
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/database`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
