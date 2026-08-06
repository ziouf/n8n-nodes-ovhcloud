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
			displayName: 'Destinationserviceid',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create M3 Aggregator integration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const destinationServiceId = this.getNodeParameter('destinationServiceId', 0) as string;

	const body: IDataObject = {};
	if (destinationServiceId) body.destinationServiceId = destinationServiceId;

	const data = (await await client.httpPost('/cloud/project/' + publicCloudProjectId + '/database/m3aggregator/' + clusterId + '/integration', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
