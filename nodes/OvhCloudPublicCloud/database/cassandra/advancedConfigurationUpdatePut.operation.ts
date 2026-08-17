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
			description: 'The Cassandra cluster ID',
			displayOptions,
		},
		{
			displayName: 'Advanced Configuration',
			name: 'advancedConfiguration',
			type: 'json',
			default: '{}',
			description: 'Advanced configuration as JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cassandra Advanced Configuration operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/advancedConfiguration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const advancedConfiguration = this.getNodeParameter('advancedConfiguration', _itemIndex ?? 0) as string;

	let body: IDataObject = {};
	try {
		body = JSON.parse(advancedConfiguration as string) as IDataObject;
	} catch {
		body = {};
	}

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/advancedConfiguration`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
