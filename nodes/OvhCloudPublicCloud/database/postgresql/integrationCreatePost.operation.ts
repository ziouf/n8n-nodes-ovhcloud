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
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Source Service ID',
			name: 'sourceServiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Destination Service ID',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Integration type',
			displayOptions,
		},
	];
}

/**
 * Executes the Create PostgreSQL Integration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const sourceServiceId = (this.getNodeParameter('sourceServiceId', _itemIndex ?? 0, '') || '') as string;
	const destinationServiceId = (this.getNodeParameter('destinationServiceId', _itemIndex ?? 0, '') || '') as string;
	const type = (this.getNodeParameter('type', _itemIndex ?? 0, '') || '') as string;
	const body: IDataObject = {};
	if (sourceServiceId) body.sourceServiceId = sourceServiceId;
	if (destinationServiceId) body.destinationServiceId = destinationServiceId;
	if (type) body.type = type;
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/integration`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
