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
 * Endpoint: /cloud/project/{serviceName}/database/kafka/{clusterId}/user
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	const description = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;
	if (description) body.description = description;
	const password = (this.getNodeParameter('password', _itemIndex ?? 0) || '') as string;
	if (password) body.password = password;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/kafka/${clusterId}/user`,
		body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
