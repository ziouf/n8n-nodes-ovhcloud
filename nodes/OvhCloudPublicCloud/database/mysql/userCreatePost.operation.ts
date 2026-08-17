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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the user',
			displayOptions,
		},
	];
}

/**
 * Executes the Create MySQL User operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/user
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = { name };
	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/user`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
