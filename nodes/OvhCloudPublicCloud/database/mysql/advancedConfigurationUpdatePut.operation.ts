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
			description: 'The MySQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Configuration',
			name: 'advancedConfiguration',
			type: 'json',
			default: '{}',
			description: 'Advanced configuration as a JSON object (map of string to string)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update MySQL Advanced Configuration operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/advancedConfiguration
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const advancedConfiguration = this.getNodeParameter(
		'advancedConfiguration',
		0,
		{},
	) as IDataObject;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/advancedConfiguration`,
		advancedConfiguration as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
