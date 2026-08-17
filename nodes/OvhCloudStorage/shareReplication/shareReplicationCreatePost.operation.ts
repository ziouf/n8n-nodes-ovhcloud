import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
	const client = getClient(this);
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
