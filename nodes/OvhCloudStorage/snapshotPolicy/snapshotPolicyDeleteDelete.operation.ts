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
			displayName: 'Snapshot Policy ID',
			name: 'snapshotPolicyId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete a snapshot policy operation.
 *
 * HTTP method: DELETE
 * Endpoint: /storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const snapshotPolicyId = this.getNodeParameter('snapshotPolicyId', _itemIndex) as string;
	const data = (await client.httpDelete(`/storage/netapp/${encodeURIComponent(serviceName)}/snapshotPolicy/${encodeURIComponent(snapshotPolicyId)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
