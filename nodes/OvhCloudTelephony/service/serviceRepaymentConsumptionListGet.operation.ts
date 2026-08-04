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
			displayName: 'Creation Datetime.from',
			name: 'creationDatetime.from',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDatetime property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Datetime.to',
			name: 'creationDatetime.to',
			type: 'string',
			default: '',
			description: 'Filter the value of creationDatetime property (<=)',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceRepaymentConsumption List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/repaymentConsumption
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const creationDatetime_from = this.getNodeParameter('creationDatetime.from', itemIndex) as string;
	const creationDatetime_to = this.getNodeParameter('creationDatetime.to', itemIndex) as string;

	const qs: IDataObject = {
		creationDatetime_from: creationDatetime_from,
		creationDatetime_to: creationDatetime_to,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/repaymentConsumption', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
