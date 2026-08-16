import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Email Option ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the object',
			displayOptions,
		},
	];
}

/**
 * Terminate your email sub service
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/emailOption/{id}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/emailOption/${encodeURIComponent(String(id))}/terminate`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
