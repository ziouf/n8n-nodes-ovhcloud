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
			displayName: 'Text',
			name: 'text',
			type: 'string',
			default: '',
			required: true,
			description: 'The text parameter',
			displayOptions,
		},
		{
			displayName: 'Voice',
			name: 'voice',
			type: 'string',
			default: '',
			description: 'The voice parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxTtsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/tts
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const text = this.getNodeParameter('text', _itemIndex) as string;
	const voice = this.getNodeParameter('voice', _itemIndex) as string;

	const body: IDataObject = {
		text: text,
		voice: voice,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/tts', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
