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
			displayName: 'Cluster ID',
			name: "clusterId",
			type: "string",
			required: true,
			default: "",
			description: "The clusterId parameter",
			displayOptions,
		},
		{
			displayName: "Extended",
			name: "extended",
			type: "boolean",
			default: false,
			description: "Whether to include extended metrics",
			displayOptions,
		}
	];
}

/**
 * Executes the List Metric operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/opensearch/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0, '') as string;
	const extended = this.getNodeParameter('extended', _itemIndex ?? 0, undefined) as boolean | undefined;

	const qs: IDataObject = {};
	if (extended) qs['extended'] = extended;
	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/opensearch/${clusterId}/metric`, qs)) as IDataObject;

	if (Array.isArray(data)) {
		return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
	}
	return this.helpers.returnJsonArray([data]);
}
