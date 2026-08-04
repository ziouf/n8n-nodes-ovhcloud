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
          displayName: 'Abbreviated Number',
          name: 'abbreviatedNumber',
          type: 'string',
          default: '',
          required: true,
          description: 'The abbreviatedNumber parameter',
          displayOptions,
        },
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
	];
}

/**
 * Executes the Get Line Abbreviated Number Get operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const abbreviatedNumber = this.getNodeParameter('abbreviatedNumber', itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/line/' + serviceName + '/abbreviatedNumber/' + abbreviatedNumber)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
