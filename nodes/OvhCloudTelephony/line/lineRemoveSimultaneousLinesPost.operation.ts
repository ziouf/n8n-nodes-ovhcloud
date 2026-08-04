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
          displayName: 'Quantity Remove',
          name: 'quantityRemove',
          type: 'string',
          default: '',
          required: true,
          description: 'The quantityRemove parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Remove Simultaneous Lines Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const quantityRemove = this.getNodeParameter('quantityRemove', itemIndex) as string;

	const body: IDataObject = {
    quantityRemove: quantityRemove
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/removeSimultaneousLines', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
