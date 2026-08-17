import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
			displayName: 'Percent',
			name: 'percent',
			type: 'number',
			default: 0,
			required: true,
			description: 'Share space percentage reserved for snapshots',
			displayOptions,
		},
	];
}

/**
 * Executes the Update snapshot reserve properties of a share operation.
 *
 * HTTP method: PUT
 * Endpoint: /storage/netapp/{serviceName}/share/{shareId}/snapshotReserve
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareId = this.getNodeParameter('shareId', _itemIndex) as string;
	const body: IDataObject = {};
	body.percent = this.getNodeParameter('percent', _itemIndex) as number;
	const data = (await client.httpPut(`/storage/netapp/${encodeURIComponent(serviceName)}/share/${encodeURIComponent(shareId)}/snapshotReserve`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
