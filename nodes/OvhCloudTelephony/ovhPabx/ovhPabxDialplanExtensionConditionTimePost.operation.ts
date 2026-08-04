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
			displayName: 'Time From',
			name: 'timeFrom',
			type: 'string',
			default: '',
			required: true,
			description: 'The time of the day when the extension will start to be executed',
			displayOptions,
		},
		{
			displayName: 'Time To',
			name: 'timeTo',
			type: 'string',
			default: '',
			required: true,
			description: 'The time of the day when the extension will stop to be executed',
			displayOptions,
		},
		{
			displayName: 'Week Day',
			name: 'weekDay',
			type: 'string',
			default: '',
			required: true,
			description: 'The day of the week when the extension will be executed',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxDialplanExtensionConditionTimePost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const dialplanId = this.getNodeParameter('dialplanId', itemIndex) as string;
	const extensionId = this.getNodeParameter('extensionId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const timeFrom = this.getNodeParameter('timeFrom', itemIndex) as string;
	const timeTo = this.getNodeParameter('timeTo', itemIndex) as string;
	const weekDay = this.getNodeParameter('weekDay', itemIndex) as string;

	const body: IDataObject = {
		timeFrom: timeFrom,
		timeTo: timeTo,
		weekDay: weekDay,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/dialplan' + '/' + encodeURIComponent(dialplanId) + '/extension' + '/' + encodeURIComponent(extensionId) + '/conditionTime', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
