import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getNetAppServices',
				displayName: 'NetApp Service Name',
				description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
				placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
			}),
			displayOptions,
		},
		{
			displayName: 'Detail',
			name: 'detail',
			type: 'boolean',
			default: false,
			description: 'Whether get detailed information about each network',
			displayOptions,
		},
	];
}

/**
 * Executes the List networks operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/network
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const detail = this.getNodeParameter('detail', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (detail !== '') { qs.detail = detail; }
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/network`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
