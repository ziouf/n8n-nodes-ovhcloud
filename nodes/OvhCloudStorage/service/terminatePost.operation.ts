import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the NetApp storage service. This action is irreversible.',
			displayOptions,
		),
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate service operation.
 *
 * HTTP method: POST
 * Endpoint: /storage/netapp/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
		`/storage/netapp/${encodeURIComponent(serviceName)}/terminate`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
