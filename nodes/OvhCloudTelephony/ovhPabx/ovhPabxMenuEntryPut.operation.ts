import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'The action triggered by the DTMF',
			displayOptions,
		},
		{
			displayName: 'Action Param',
			name: 'actionParam',
			type: 'string',
			default: '',
			description: 'The additionnal parameter of the action',
			displayOptions,
		},
		{
			displayName: 'Dtmf',
			name: 'dtmf',
			type: 'string',
			default: '',
			description: 'The DTMF that triggers the action',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxMenuEntryPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const entryId = this.getNodeParameter('entryId', _itemIndex) as string;
	const menuId = this.getNodeParameter('menuId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const action = this.getNodeParameter('action', _itemIndex) as string;
	const actionParam = this.getNodeParameter('actionParam', _itemIndex) as string;
	const dtmf = this.getNodeParameter('dtmf', _itemIndex) as string;

	const body: IDataObject = {
		action: action,
		actionParam: actionParam,
		dtmf: dtmf,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/menu' + '/' + encodeURIComponent(menuId) + '/entry' + '/' + encodeURIComponent(entryId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
