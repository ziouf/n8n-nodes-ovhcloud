import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Date',
			name: 'date',
			type: 'dateTime',
			default: '',
			description: 'Logs date (default is yesterday)',
			displayOptions,
		},
	];
}

/**
 * Generate URL to logs archive
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domain}/logs
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const date = this.getNodeParameter('date', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (date) qs.date = date;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/cdn/domain/${domain}/logs`,
		qs,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
