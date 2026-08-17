import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
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
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Kind Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The log kind name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get PostgreSQL Log Kind operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/log/kind/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/log/kind/${name}`)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
