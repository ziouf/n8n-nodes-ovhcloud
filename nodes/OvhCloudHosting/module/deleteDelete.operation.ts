import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Module ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Installation ID of the module',
			displayOptions,
		},
	];
}

/**
 * Delete a module installed on the hosting
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/{serviceName}/module/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const id = this.getNodeParameter('id', _itemIndex as number) as number;
	const data = (await client.httpDelete(
		`/hosting/web/${encodeURIComponent(serviceName)}/module/${encodeURIComponent(String(id))}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
