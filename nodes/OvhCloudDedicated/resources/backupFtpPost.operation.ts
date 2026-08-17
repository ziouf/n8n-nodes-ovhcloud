/** @warning IRREVERSIBLE OPERATION: This creates a FTP backup space for the dedicated server, overwriting any existing FTP backup configuration. */
import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'getDedicatedServerServices',
						displayName: 'Dedicated Server Service Name',
						description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
						placeholder: 'ns123456.ip-123-45-678.eu',
					}),
					displayOptions,
				},
		{ displayName: 'Offer ID', name: 'offerId', type: 'string', default: '', description: "The backup FTP offer identifier (optional). If not provided, the default offer will be used.", displayOptions, },
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const offerId = (this.getNodeParameter('offerId', _itemIndex ?? 0, '') as string) || undefined;
	const body: IDataObject = {};
	if (offerId !== undefined && offerId !== '') { body.offerId = offerId; }
	const data = (await client.httpPost(`/dedicated/server/${serviceName}/features/backupFTP`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
