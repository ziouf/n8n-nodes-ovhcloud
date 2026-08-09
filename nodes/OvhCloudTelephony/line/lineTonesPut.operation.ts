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
          displayName: 'Call Waiting',
          name: 'callWaiting',
          type: 'string',
          default: '',
          description: 'The callWaiting parameter',
          displayOptions,
        },
        {
          displayName: 'End Call',
          name: 'endCall',
          type: 'string',
          default: '',
          description: 'The endCall parameter',
          displayOptions,
        },
        {
          displayName: 'On Hold',
          name: 'onHold',
          type: 'string',
          default: '',
          description: 'The onHold parameter',
          displayOptions,
        },
        {
          displayName: 'Ringback',
          name: 'ringback',
          type: 'string',
          default: '',
          description: 'The ringback parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Tones Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/tones
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const callWaiting = this.getNodeParameter('callWaiting', _itemIndex) as string;
	const endCall = this.getNodeParameter('endCall', _itemIndex) as string;
	const onHold = this.getNodeParameter('onHold', _itemIndex) as string;
	const ringback = this.getNodeParameter('ringback', _itemIndex) as string;

	const body: IDataObject = {
    callWaiting: callWaiting,
    endCall: endCall,
    onHold: onHold,
    ringback: ringback
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/tones', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
