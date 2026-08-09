import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			],
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Share replication description',
			displayOptions,
		},
		{
			displayName: 'Destination Service ID',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			description: 'Replication service ID (destination)',
			displayOptions,
		},
		{
			displayName: 'Source Share ID',
			name: 'sourceShareId',
			type: 'string',
			default: '',
			description: 'Replication share ID (source)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a share replication operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/shareReplication
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const destinationServiceId = this.getNodeParameter('destinationServiceId', _itemIndex, '') as string;
	if (destinationServiceId !== '') { body.destinationServiceId = destinationServiceId; }
	const sourceShareId = this.getNodeParameter('sourceShareId', _itemIndex, '') as string;
	if (sourceShareId !== '') { body.sourceShareId = sourceShareId; }
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/shareReplication`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
