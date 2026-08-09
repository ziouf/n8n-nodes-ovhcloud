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
			displayName: 'Rate Code',
			name: 'rateCode',
			type: 'string',
			default: '',
			required: true,
			description: 'The specified rate code',
			displayOptions,
		},
	];
}

/**
 * Executes the RsvaScheduleRateCodePost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const rateCode = this.getNodeParameter('rateCode', _itemIndex) as string;

	const body: IDataObject = {
		rateCode: rateCode,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/rsva' + '/' + encodeURIComponent(serviceName) + '/scheduleRateCode', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
