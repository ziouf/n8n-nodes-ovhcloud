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
		},
		{
			displayName: 'Ipblock',
			name: 'ipBlock',
			type: 'string',
			required: true,
			default: '',
			description: 'IpBlock parameter',
			displayOptions,
		}
	];
}

/**
 * Executes the OPERATION_NAME_PLACEHOLDER.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/database/kafka/{clusterId}/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const data = (await client.httpDelete(
		`/cloud/project/${serviceName}/database/kafka/${clusterId}/${ipBlock}`,
		undefined
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
