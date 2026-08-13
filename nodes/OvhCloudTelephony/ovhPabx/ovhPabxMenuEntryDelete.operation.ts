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
			displayName: 'Entry ID',
			name: 'entryId',
			type: 'string',
			default: '',
			required: true,
			description: 'The entryId parameter',
			displayOptions,
		},
		{
			displayName: 'Menu ID',
			name: 'menuId',
			type: 'string',
			default: '',
			required: true,
			description: 'The menuId parameter',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxMenuEntryDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const entryId = this.getNodeParameter('entryId', _itemIndex) as string;
	const menuId = this.getNodeParameter('menuId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/menu' + '/' + encodeURIComponent(menuId) + '/entry' + '/' + encodeURIComponent(entryId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
