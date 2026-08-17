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
 * Endpoint: /cloud/project/{serviceName}/database/kafka/{clusterId}/topicAcl
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
		`/cloud/project/${serviceName}/database/kafka/${clusterId}/topicAcl`,
		body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
