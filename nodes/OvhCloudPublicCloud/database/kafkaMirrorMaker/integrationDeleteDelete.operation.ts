import type {
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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Kafka MirrorMaker cluster ID',
			displayOptions,
		},
		{
			displayName: 'Integration ID',
			name: 'integrationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		}
	];
}

/**
 * Executes the Delete Kafka MirrorMaker Integration.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/integration/${integrationId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const integrationId = this.getNodeParameter('integrationId', 0) as string;
	 
	 
		void (await client.httpDelete(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/integration/${integrationId}`)) as void;

	return this.helpers.returnJsonArray([]);
}
