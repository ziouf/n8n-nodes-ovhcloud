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
			displayName: 'Policy',
			name: 'policy',
			type: 'string',
			default: '',
			required: true,
			description: 'The time condition\'s policy',
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
 * Executes the EasyHuntingTimeConditionsConditionsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const policy = this.getNodeParameter('policy', _itemIndex) as string;
	const timeFrom = this.getNodeParameter('timeFrom', _itemIndex) as string;
	const timeTo = this.getNodeParameter('timeTo', _itemIndex) as string;
	const weekDay = this.getNodeParameter('weekDay', _itemIndex) as string;

	const body: IDataObject = {
		policy: policy,
		timeFrom: timeFrom,
		timeTo: timeTo,
		weekDay: weekDay,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/timeConditions' + '/conditions', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
