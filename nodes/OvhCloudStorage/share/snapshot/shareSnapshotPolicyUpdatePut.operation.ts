import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Snapshot Policy ID',
			name: 'snapshotPolicyID',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Update snapshot policy used by a share operation.
 *
 * HTTP method: PUT
 * Endpoint: /storage/netapp/{serviceName}/share/{shareId}/snapshotPolicy
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareId = this.getNodeParameter('shareId', _itemIndex) as string;
	const body: IDataObject = {};
	body.snapshotPolicyID = this.getNodeParameter('snapshotPolicyID', _itemIndex) as string;
	const data = (await client.httpPut(`/storage/netapp/${encodeURIComponent(serviceName)}/share/${encodeURIComponent(shareId)}/snapshotPolicy`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
