import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The vxml service name',
			displayOptions,
		},
		{
			displayName: 'Url',
			name: 'url',
			type: 'string',
			default: '',
			description: 'The URL parameter',
			displayOptions,
		},
		{
			displayName: 'Url Record',
			name: 'urlRecord',
			type: 'string',
			default: '',
			description: 'The urlRecord parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Put Vxml Settings operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/vxml/{serviceName}/settings
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const url = this.getNodeParameter('url', _itemIndex) as string;
	const urlRecord = this.getNodeParameter('urlRecord', _itemIndex) as string;

	const body: IDataObject = {
		url: url,
		urlRecord: urlRecord,
	};

	const client = getClient(this);
	const data = (await client.httpPut(
		'/telephony/' + billingAccount + '/vxml/' + serviceName + '/settings',
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
