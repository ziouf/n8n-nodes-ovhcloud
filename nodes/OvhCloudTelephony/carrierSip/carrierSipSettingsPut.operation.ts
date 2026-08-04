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
          displayName: 'Description',
          name: 'description',
          type: 'string',
          default: '',
          description: 'The description parameter',
          displayOptions,
        },
        {
          displayName: 'Max Calls Per Second',
          name: 'maxCallsPerSecond',
          type: 'string',
          default: '',
          description: 'The maxCallsPerSecond parameter',
          displayOptions,
        },
        {
          displayName: 'Max Concurrent Calls',
          name: 'maxConcurrentCalls',
          type: 'string',
          default: '',
          description: 'The maxConcurrentCalls parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Carrier Sip Settings Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/carrierSip/{serviceName}/settings
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const description = this.getNodeParameter('description', itemIndex) as string;
	const maxCallsPerSecond = this.getNodeParameter('maxCallsPerSecond', itemIndex) as string;
	const maxConcurrentCalls = this.getNodeParameter('maxConcurrentCalls', itemIndex) as string;

	const body: IDataObject = {
    description: description,
    maxCallsPerSecond: maxCallsPerSecond,
    maxConcurrentCalls: maxConcurrentCalls
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/carrierSip/' + serviceName + '/settings', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
