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
 * Executes the Get snapshot policy details operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const snapshotPolicyId = this.getNodeParameter('snapshotPolicyId', _itemIndex) as string;
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/snapshotPolicy/${encodeURIComponent(snapshotPolicyId)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
