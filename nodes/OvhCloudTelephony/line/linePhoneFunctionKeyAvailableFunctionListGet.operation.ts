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
          displayName: 'Key Num',
          name: 'keyNum',
          type: 'string',
          default: '',
          required: true,
          description: 'The keyNum parameter',
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
 * Executes the Get Line Phone Function Key Available Function List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const keyNum = this.getNodeParameter('keyNum', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/functionKey/' + keyNum + '/availableFunction')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
