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
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Integrationid',
			name: 'integrationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get M3 Aggregator integration operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration/{integrationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const integrationId = this.getNodeParameter('integrationId', _itemIndex ?? 0) as string;

	const data = (await await client.httpGet(
		'/cloud/project/' +
			publicCloudProjectId +
			'/database/m3aggregator/' +
			clusterId +
			'/integration/' +
			integrationId,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
