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
	];
}

/**
 * Executes the Get Carrier Sip Vno Ranges Get operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/carrierSip/{serviceName}/vno/{contractReference}/ranges/{prefix}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const contractReference = this.getNodeParameter('contractReference', _itemIndex) as string;
	const prefix = this.getNodeParameter('prefix', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/carrierSip/' + serviceName + '/vno/' + contractReference + '/ranges/' + prefix)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
