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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Crm Url Template',
			name: 'crmUrlTemplate',
			type: 'string',
			default: '',
			description: 'The templated URL of your CRM, opened by the banner application of your cloudpabx',
			displayOptions,
		},
		{
			displayName: 'G729',
			name: 'g729',
			type: 'string',
			default: '',
			description: 'Whether Enable G729 codec on your callcenter',
			displayOptions,
		},
		{
			displayName: 'Status Ivr Enabled',
			name: 'statusIvrEnabled',
			type: 'string',
			default: '',
			description: 'Whether Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default.',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const crmUrlTemplate = this.getNodeParameter('crmUrlTemplate', _itemIndex) as string;
	const g729 = this.getNodeParameter('g729', _itemIndex) as string;
	const statusIvrEnabled = this.getNodeParameter('statusIvrEnabled', _itemIndex) as string;

	const body: IDataObject = {
		crmUrlTemplate: crmUrlTemplate,
		g729: g729,
		statusIvrEnabled: statusIvrEnabled,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
