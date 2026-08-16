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
			displayName: 'Date',
			name: 'date',
			type: 'dateTime',
			default: '',
			required: true,
			description: 'The date of the boost request',
			displayOptions,
		},
	];
}

/**
 * Get a boost history entry by date
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/boostHistory/{date}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const date = this.getNodeParameter('date', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/boostHistory/${encodeURIComponent(date)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
