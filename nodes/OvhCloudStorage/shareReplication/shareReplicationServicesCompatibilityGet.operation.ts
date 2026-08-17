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
			displayName: 'Compatible Only',
			name: 'compatibleOnly',
			type: 'boolean',
			default: false,
			description: 'Whether if set to true, only services compatible as share replication destinations for the given source are returned',
			displayOptions,
		},
	];
}

/**
 * Executes the List compatible destination services operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/shareReplicationServicesCompatibility
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const compatibleOnly = this.getNodeParameter('compatibleOnly', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (compatibleOnly !== '') { qs.compatibleOnly = compatibleOnly; }
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/shareReplicationServicesCompatibility`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
