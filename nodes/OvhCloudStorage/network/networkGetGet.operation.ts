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
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get network details operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/network/{networkId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
				extractValue: true,
			}) as string;
	const networkId = this.getNodeParameter('networkId', _itemIndex) as string;
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/network/${encodeURIComponent(networkId)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
