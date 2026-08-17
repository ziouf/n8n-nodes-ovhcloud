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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const advancedConfiguration = this.getNodeParameter(
		'advancedConfiguration',
		_itemIndex ?? 0,
		{},
	) as IDataObject;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/advancedConfiguration`,
		advancedConfiguration as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
