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
			required: true,
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
			required: true,
			description: 'The DTMF that triggers the action',
			displayOptions,
		},
		{
			displayName: 'Position',
			name: 'position',
			type: 'string',
			default: '',
			required: true,
			description: 'The position of the entry in the menu',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxMenuEntryPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const menuId = this.getNodeParameter('menuId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const action = this.getNodeParameter('action', itemIndex) as string;
	const actionParam = this.getNodeParameter('actionParam', itemIndex) as string;
	const dtmf = this.getNodeParameter('dtmf', itemIndex) as string;
	const position = this.getNodeParameter('position', itemIndex) as string;

	const body: IDataObject = {
		action: action,
		actionParam: actionParam,
		dtmf: dtmf,
		position: position,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/menu' + '/' + encodeURIComponent(menuId) + '/entry', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
