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
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const snapshotPolicyId = this.getNodeParameter('snapshotPolicyId', _itemIndex) as string;
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/snapshotPolicy/${encodeURIComponent(snapshotPolicyId)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
