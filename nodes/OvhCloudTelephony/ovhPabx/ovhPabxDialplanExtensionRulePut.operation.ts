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
			displayName: 'Dialplan ID',
			name: 'dialplanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The dialplanId parameter',
			displayOptions,
		},
		{
			displayName: 'Extension ID',
			name: 'extensionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The extensionId parameter',
			displayOptions,
		},
		{
			displayName: 'Rule ID',
			name: 'ruleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ruleId parameter',
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
			description: 'The action made by the rule',
			displayOptions,
		},
		{
			displayName: 'Action Param',
			name: 'actionParam',
			type: 'string',
			default: '',
			description: 'The parameter of the chosen action',
			displayOptions,
		},
		{
			displayName: 'Negative Action',
			name: 'negativeAction',
			type: 'string',
			default: '',
			description: 'Whether If true, the rule will be executed only when the result of the conditions is false',
			displayOptions,
		},
		{
			displayName: 'Position',
			name: 'position',
			type: 'string',
			default: '',
			description: 'The position of the rule in the extension (the rules are executed following this order)',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxDialplanExtensionRulePut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const dialplanId = this.getNodeParameter('dialplanId', _itemIndex) as string;
	const extensionId = this.getNodeParameter('extensionId', _itemIndex) as string;
	const ruleId = this.getNodeParameter('ruleId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const action = this.getNodeParameter('action', _itemIndex) as string;
	const actionParam = this.getNodeParameter('actionParam', _itemIndex) as string;
	const negativeAction = this.getNodeParameter('negativeAction', _itemIndex) as string;
	const position = this.getNodeParameter('position', _itemIndex) as string;

	const body: IDataObject = {
		action: action,
		actionParam: actionParam,
		negativeAction: negativeAction,
		position: position,
	};

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan' + '/' + encodeURIComponent(dialplanId) + '/extension' + '/' + encodeURIComponent(extensionId) + '/rule' + '/' + encodeURIComponent(ruleId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
