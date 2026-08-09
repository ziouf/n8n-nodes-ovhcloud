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
			displayName: 'Condition ID',
			name: 'conditionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The conditionId parameter',
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
 * Executes the OvhPabxDialplanExtensionConditionTimeGet operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const conditionId = this.getNodeParameter('conditionId', _itemIndex) as string;
	const dialplanId = this.getNodeParameter('dialplanId', _itemIndex) as string;
	const extensionId = this.getNodeParameter('extensionId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan' + '/' + encodeURIComponent(dialplanId) + '/extension' + '/' + encodeURIComponent(extensionId) + '/conditionTime' + '/' + encodeURIComponent(conditionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
