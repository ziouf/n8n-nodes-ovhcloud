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
			displayName: 'Greet Sound',
			name: 'greetSound',
			type: 'string',
			default: '',
			description: 'The ID of the OvhPabxSound played to greet',
			displayOptions,
		},
		{
			displayName: 'Greet Sound Tts',
			name: 'greetSoundTts',
			type: 'string',
			default: '',
			description: 'The text to speech sound played to greet',
			displayOptions,
		},
		{
			displayName: 'Inter Digit Timeout',
			name: 'interDigitTimeout',
			type: 'string',
			default: '',
			description: 'The timeout in milliseconds before considering the DTMF entry as done',
			displayOptions,
		},
		{
			displayName: 'Invalid Sound',
			name: 'invalidSound',
			type: 'string',
			default: '',
			description: 'The ID of the OvhPabxSound played when the caller uses an invalid DTMF',
			displayOptions,
		},
		{
			displayName: 'Invalid Sound Tts',
			name: 'invalidSoundTts',
			type: 'string',
			default: '',
			description: 'The text to speech sound played when the caller uses an invalid DTMF',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the menu',
			displayOptions,
		},
		{
			displayName: 'Timeout',
			name: 'timeout',
			type: 'string',
			default: '',
			description: 'The timeout in milliseconds before ending the menu when no DTMF is received',
			displayOptions,
		},
	];
}

/**
 * Executes the OvhPabxMenuPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/ovhPabx/{serviceName}/menu
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const greetSound = this.getNodeParameter('greetSound', _itemIndex) as string;
	const greetSoundTts = this.getNodeParameter('greetSoundTts', _itemIndex) as string;
	const interDigitTimeout = this.getNodeParameter('interDigitTimeout', _itemIndex) as string;
	const invalidSound = this.getNodeParameter('invalidSound', _itemIndex) as string;
	const invalidSoundTts = this.getNodeParameter('invalidSoundTts', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const timeout = this.getNodeParameter('timeout', _itemIndex) as string;

	const body: IDataObject = {
		greetSound: greetSound,
		greetSoundTts: greetSoundTts,
		interDigitTimeout: interDigitTimeout,
		invalidSound: invalidSound,
		invalidSoundTts: invalidSoundTts,
		name: name,
		timeout: timeout,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/ovhPabx' + '/' + encodeURIComponent(serviceName) + '/menu', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
