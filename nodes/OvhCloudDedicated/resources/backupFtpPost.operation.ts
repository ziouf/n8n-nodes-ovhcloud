/** @warning IRREVERSIBLE OPERATION: This creates a FTP backup space for the dedicated server, overwriting any existing FTP backup configuration. */
import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Dedicated Server Service Name', name: 'serviceName', type: 'resourceLocator', default: { mode: 'list', value: '' }, required: true, description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)', modes: [
			{ displayName: 'From List', name: 'list', type: 'list', typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true } },
			{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'ns123456.ip-123-45-678.eu' },
		], displayOptions, },
		{ displayName: 'Offer ID', name: 'offerId', type: 'string', default: '', description: "The backup FTP offer identifier (optional). If not provided, the default offer will be used.", displayOptions, },
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const offerId = (this.getNodeParameter('offerId', 0, '') as string) || undefined;
	const body: IDataObject = {};
	if (offerId !== undefined && offerId !== '') { body.offerId = offerId; }
	const data = (await client.httpPost(`/dedicated/server/${serviceName}/features/backupFTP`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
