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
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '' ,
			required: true,
			description: 'Optional kind',
			displayOptions,
		},
	];
}

/**
 * Executes the List log subscriptions.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/log/subscription
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
const client = new ApiClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', 0) as string;
const kind = this.getNodeParameter('kind', 0, undefined) as string | undefined;
const data = (await client.httpGet(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/log/subscription`, { kind: kind })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
