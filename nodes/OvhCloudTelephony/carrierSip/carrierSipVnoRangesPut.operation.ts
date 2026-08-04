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
          displayName: 'Contract Reference',
          name: 'contractReference',
          type: 'string',
          default: '',
          required: true,
          description: 'The contractReference parameter',
          displayOptions,
        },
        {
          displayName: 'Prefix',
          name: 'prefix',
          type: 'string',
          default: '',
          required: true,
          description: 'The prefix parameter',
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
          displayName: 'Prefix',
          name: 'prefix',
          type: 'string',
          default: '',
          description: 'The prefix parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Carrier Sip Vno Ranges Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/carrierSip/{serviceName}/vno/{contractReference}/ranges/{prefix}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const contractReference = this.getNodeParameter('contractReference', itemIndex) as string;
	const prefix = this.getNodeParameter('prefix', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const description = this.getNodeParameter('description', itemIndex) as string;
	const prefix1 = this.getNodeParameter('prefix', itemIndex) as string;

	const body: IDataObject = {
    description: description,
    prefix: prefix1
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/carrierSip/' + serviceName + '/vno/' + contractReference + '/ranges/' + prefix, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
