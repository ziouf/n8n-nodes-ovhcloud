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
		{
			displayName: 'Output',
			name: 'output',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create M3 Aggregator log subscription operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const kind = this.getNodeParameter('kind', _itemIndex ?? 0) as string;
	const output = this.getNodeParameter('output', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (kind) body.kind = kind;
	if (output) body.output = output;

	const data = (await await client.httpPost('/cloud/project/' + publicCloudProjectId + '/database/m3aggregator/' + clusterId + '/log/subscription', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
