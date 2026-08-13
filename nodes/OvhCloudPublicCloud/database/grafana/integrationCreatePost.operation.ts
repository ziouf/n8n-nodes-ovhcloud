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
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Grafana cluster ID',
			displayOptions,
		},
		{
			displayName: 'Destination Service ID',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the destination service',
			displayOptions,
		},
		{
			displayName: 'Source Service ID',
			name: 'sourceServiceId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the source service',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Grafana Integration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/grafana/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const destinationServiceId = this.getNodeParameter('destinationServiceId', _itemIndex ?? 0) as string;
	const sourceServiceId = this.getNodeParameter('sourceServiceId', _itemIndex ?? 0) as string;

	const body: IDataObject = { destinationServiceId, sourceServiceId };
	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/grafana/${clusterId}/integration`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
