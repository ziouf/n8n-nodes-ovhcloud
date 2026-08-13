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
			description: 'Filter the boost history on a specific date',
			displayOptions,
		},
	];
}

/**
 * List the boost request history of the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/boostHistory
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const date = this.getNodeParameter('date', _itemIndex as number, '') as string;

	const qs: IDataObject = {};
	if (date) {
		qs.date = date;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/boostHistory`,
		qs,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((item) => ({ date: item })));
}
