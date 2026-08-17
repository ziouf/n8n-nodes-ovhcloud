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
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Size (GB)',
			name: 'size',
			type: 'number',
			default: 0,
			required: true,
			description: 'Share size in Gigabytes',
			displayOptions,
		},
	];
}

/**
 * Executes the Extend share size operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/share/{shareId}/extend
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const shareId = this.getNodeParameter('shareId', _itemIndex) as string;
	const body: IDataObject = {};
	body.size = this.getNodeParameter('size', _itemIndex) as number;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/share/${encodeURIComponent(shareId)}/extend`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
