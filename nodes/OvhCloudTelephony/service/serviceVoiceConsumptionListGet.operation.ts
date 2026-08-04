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
		{
			displayName: 'Destination Type',
			name: 'destinationType',
			type: 'string',
			default: '',
			description: 'Filter the value of destinationType property (=)',
			displayOptions,
		},
		{
			displayName: 'Plan Type',
			name: 'planType',
			type: 'string',
			default: '',
			description: 'Filter the value of planType property (=)',
			displayOptions,
		},
		{
			displayName: 'Way Type',
			name: 'wayType',
			type: 'string',
			default: '',
			description: 'Filter the value of wayType property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceVoiceConsumption List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/voiceConsumption
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const creationDatetime_from = this.getNodeParameter('creationDatetime.from', itemIndex) as string;
	const creationDatetime_to = this.getNodeParameter('creationDatetime.to', itemIndex) as string;
	const destinationType = this.getNodeParameter('destinationType', itemIndex) as string;
	const planType = this.getNodeParameter('planType', itemIndex) as string;
	const wayType = this.getNodeParameter('wayType', itemIndex) as string;

	const qs: IDataObject = {
		creationDatetime_from: creationDatetime_from,
		creationDatetime_to: creationDatetime_to,
		destinationType: destinationType,
		planType: planType,
		wayType: wayType,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/voiceConsumption', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
