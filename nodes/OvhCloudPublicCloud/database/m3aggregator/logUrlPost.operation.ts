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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Generate M3 Aggregator log URL operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/log/url
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const kind = this.getNodeParameter('kind', 0) as string;

	const body: IDataObject = {};
	if (kind) body.kind = kind;

	const data = (await await client.httpPost('/cloud/project/' + publicCloudProjectId + '/database/m3aggregator/' + clusterId + '/log/url', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
