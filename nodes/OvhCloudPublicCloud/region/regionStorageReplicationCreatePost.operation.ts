import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Delete Marker Replication',
			name: 'deleteMarkerReplication',
			type: 'string',
			default: '',
			description: 'The deleteMarkerReplication parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Destination',
			name: 'destination',
			type: 'string',
			default: '',
			description: 'The destination parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Filter',
			name: 'filter',
			type: 'string',
			default: '',
			description: 'The filter parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'The ID parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Priority',
			name: 'priority',
			type: 'string',
			default: '',
			description: 'The priority parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST Create a replication job on a S3* compatible storage container operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/job/replication
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const deleteMarkerReplication = this.getNodeParameter('deleteMarkerReplication', _itemIndex ?? 0, '') as string;
	const destination = this.getNodeParameter('destination', _itemIndex ?? 0, '') as string;
	const filter = this.getNodeParameter('filter', _itemIndex ?? 0, '') as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0, '') as string;
	const priority = this.getNodeParameter('priority', _itemIndex ?? 0, '') as string;
	const status = this.getNodeParameter('status', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		deleteMarkerReplication: deleteMarkerReplication,
		destination: destination,
		filter: filter,
		id: id,
		priority: priority,
		status: status
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/job/replication',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
