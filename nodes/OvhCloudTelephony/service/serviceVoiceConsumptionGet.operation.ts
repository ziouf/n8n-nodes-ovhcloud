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
			displayName: 'Consumption ID',
			name: 'consumptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The consumptionId parameter',
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
 * Executes the ServiceVoiceConsumptionGet operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const consumptionId = this.getNodeParameter('consumptionId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/voiceConsumption' + '/' + encodeURIComponent(consumptionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
