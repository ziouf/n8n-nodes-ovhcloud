import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

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
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get snapshot policy used by a share operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/share/{shareId}/snapshotPolicy
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareId = this.getNodeParameter('shareId', _itemIndex) as string;
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/share/${encodeURIComponent(shareId)}/snapshotPolicy`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
