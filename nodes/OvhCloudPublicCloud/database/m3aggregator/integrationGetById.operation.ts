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
			default: '',
			required: true,
			description: 'The Public Cloud project ID',
			typeOptions: { searchListMethod: 'getPublicCloudProjects' },
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const integrationId = this.getNodeParameter('integrationId', 0) as string;

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
