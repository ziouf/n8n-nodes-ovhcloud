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
		{
			displayName: 'Enabled',
			name: 'enabled',
			type: 'string',
			default: '',
			description: 'Whether True if the extension is enabled',
			displayOptions,
		},
		{
			displayName: 'Position',
			name: 'position',
			type: 'string',
			default: '',
			description: 'The position of the extension in the dialplan (the extensions are executed following this order)',
			displayOptions,
		},
		{
			displayName: 'Scheduler Category',
			name: 'schedulerCategory',
			type: 'string',
			default: '',
			description: 'Additionnal conditions are used from this chosen scheduler category',
			displayOptions,
		},
		{
			displayName: 'Screen List Type',
			name: 'screenListType',
			type: 'string',
			default: '',
			description: 'The type of the screenlist',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxDialplanExtensionPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const dialplanId = this.getNodeParameter('dialplanId', _itemIndex) as string;
	const extensionId = this.getNodeParameter('extensionId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const enabled = this.getNodeParameter('enabled', _itemIndex) as string;
	const position = this.getNodeParameter('position', _itemIndex) as string;
	const schedulerCategory = this.getNodeParameter('schedulerCategory', _itemIndex) as string;
	const screenListType = this.getNodeParameter('screenListType', _itemIndex) as string;

	const body: IDataObject = {
		enabled: enabled,
		position: position,
		schedulerCategory: schedulerCategory,
		screenListType: screenListType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan' + '/' + encodeURIComponent(dialplanId) + '/extension' + '/' + encodeURIComponent(extensionId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
