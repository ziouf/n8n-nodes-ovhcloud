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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Policy',
			name: 'policy',
			type: 'string',
			default: '',
			description: 'The policy of time condition',
			displayOptions,
		},
		{
			displayName: 'Time From',
			name: 'timeFrom',
			type: 'string',
			default: '',
			description: 'The time of the day when the extension will start to be executed',
			displayOptions,
		},
		{
			displayName: 'Time To',
			name: 'timeTo',
			type: 'string',
			default: '',
			description: 'The time of the day when the extension will stop to be executed',
			displayOptions,
		},
		{
			displayName: 'Week Day',
			name: 'weekDay',
			type: 'string',
			default: '',
			description: 'The day of the week when the extension will be executed',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingTimeConditionsConditionsPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const conditionId = this.getNodeParameter('conditionId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const policy = this.getNodeParameter('policy', itemIndex) as string;
	const timeFrom = this.getNodeParameter('timeFrom', itemIndex) as string;
	const timeTo = this.getNodeParameter('timeTo', itemIndex) as string;
	const weekDay = this.getNodeParameter('weekDay', itemIndex) as string;

	const body: IDataObject = {
		policy: policy,
		timeFrom: timeFrom,
		timeTo: timeTo,
		weekDay: weekDay,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/timeConditions' + '/conditions' + '/' + encodeURIComponent(conditionId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
