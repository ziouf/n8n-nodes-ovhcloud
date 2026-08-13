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
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			required: true,
			default: '',
			description: 'ClusterId parameter',
			displayOptions,
		}
	];
}

/**
 * Executes the OPERATION_NAME_PLACEHOLDER.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/kafka/{clusterId}/schemaRegistryAcl
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	const patternType = (this.getNodeParameter('patternType', _itemIndex ?? 0) || '') as string;
	if (patternType) body.patternType = patternType;
	const host = (this.getNodeParameter('host', _itemIndex ?? 0) || '') as string;
	if (host) body.host = host;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (name) body.name = name;
	const operation = (this.getNodeParameter('operation', _itemIndex ?? 0) || '') as string;
	if (operation) body.operation = operation;
	const permissionType = (this.getNodeParameter('permissionType', _itemIndex ?? 0) || '') as string;
	if (permissionType) body.permissionType = permissionType;
	const principal = (this.getNodeParameter('principal', _itemIndex ?? 0) || '') as string;
	if (principal) body.principal = principal;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/kafka/${clusterId}/schemaRegistryAcl`,
		body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
