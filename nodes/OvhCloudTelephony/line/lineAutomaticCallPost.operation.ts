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
          displayOptions,
        },
        {
          displayName: 'Bridge Number Dialplan',
          name: 'bridgeNumberDialplan',
          type: 'string',
          default: '',
          description: 'The bridgeNumberDialplan parameter',
          displayOptions,
        },
        {
          displayName: 'Called Number',
          name: 'calledNumber',
          type: 'string',
          default: '',
          required: true,
          description: 'The calledNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Calling Number',
          name: 'callingNumber',
          type: 'string',
          default: '',
          description: 'The callingNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Dialplan',
          name: 'dialplan',
          type: 'string',
          default: '',
          required: true,
          description: 'The dialplan parameter',
          displayOptions,
        },
        {
          displayName: 'Is Anonymous',
          name: 'isAnonymous',
          type: 'string',
          default: '',
          required: true,
          description: 'The isAnonymous parameter',
          displayOptions,
        },
        {
          displayName: 'Playback Audio File Dialplan',
          name: 'playbackAudioFileDialplan',
          type: 'string',
          default: '',
          description: 'The playbackAudioFileDialplan parameter',
          displayOptions,
        },
        {
          displayName: 'Timeout',
          name: 'timeout',
          type: 'string',
          default: '',
          description: 'The timeout parameter',
          displayOptions,
        },
        {
          displayName: 'Tts Text Dialplan',
          name: 'ttsTextDialplan',
          type: 'string',
          default: '',
          description: 'The ttsTextDialplan parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Automatic Call Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/automaticCall
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const bridgeNumberDialplan = this.getNodeParameter('bridgeNumberDialplan', itemIndex) as string;
	const calledNumber = this.getNodeParameter('calledNumber', itemIndex) as string;
	const callingNumber = this.getNodeParameter('callingNumber', itemIndex) as string;
	const dialplan = this.getNodeParameter('dialplan', itemIndex) as string;
	const isAnonymous = this.getNodeParameter('isAnonymous', itemIndex) as string;
	const playbackAudioFileDialplan = this.getNodeParameter('playbackAudioFileDialplan', itemIndex) as string;
	const timeout = this.getNodeParameter('timeout', itemIndex) as string;
	const ttsTextDialplan = this.getNodeParameter('ttsTextDialplan', itemIndex) as string;

	const body: IDataObject = {
    bridgeNumberDialplan: bridgeNumberDialplan,
    calledNumber: calledNumber,
    callingNumber: callingNumber,
    dialplan: dialplan,
    isAnonymous: isAnonymous,
    playbackAudioFileDialplan: playbackAudioFileDialplan,
    timeout: timeout,
    ttsTextDialplan: ttsTextDialplan
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/automaticCall', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
