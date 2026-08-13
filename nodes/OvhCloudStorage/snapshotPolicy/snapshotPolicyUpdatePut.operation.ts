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
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'New snapshot policy description',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'New snapshot policy name',
			displayOptions,
		},
	];
}

/**
 * Executes the Update a snapshot policy operation.
 *
 * HTTP method: PUT
 * Endpoint: /storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const snapshotPolicyId = this.getNodeParameter('snapshotPolicyId', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const name = this.getNodeParameter('name', _itemIndex, '') as string;
	if (name !== '') { body.name = name; }
	const data = (await client.httpPut(`/storage/netapp/${encodeURIComponent(serviceName)}/snapshotPolicy/${encodeURIComponent(snapshotPolicyId)}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
