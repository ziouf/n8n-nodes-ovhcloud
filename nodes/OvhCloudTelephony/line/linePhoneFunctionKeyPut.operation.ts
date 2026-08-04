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
        {
          displayName: 'Default',
          name: 'default',
          type: 'string',
          default: '',
          description: 'The default parameter',
          displayOptions,
        },
        {
          displayName: 'Function',
          name: 'function',
          type: 'string',
          default: '',
          description: 'The function parameter',
          displayOptions,
        },
        {
          displayName: 'Key Num',
          name: 'keyNum',
          type: 'string',
          default: '',
          description: 'The keyNum parameter',
          displayOptions,
        },
        {
          displayName: 'Label',
          name: 'label',
          type: 'string',
          default: '',
          description: 'The label parameter',
          displayOptions,
        },
        {
          displayName: 'Parameter',
          name: 'parameter',
          type: 'string',
          default: '',
          description: 'The parameter parameter',
          displayOptions,
        },
        {
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          description: 'The type parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Phone Function Key Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const keyNum = this.getNodeParameter('keyNum', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const defaultParam = this.getNodeParameter('default', itemIndex) as string;
	const functionParam = this.getNodeParameter('function', itemIndex) as string;
	const keyNum1 = this.getNodeParameter('keyNum', itemIndex) as string;
	const label = this.getNodeParameter('label', itemIndex) as string;
	const parameter = this.getNodeParameter('parameter', itemIndex) as string;
	const typeParam = this.getNodeParameter('type', itemIndex) as string;

	const body: IDataObject = {
    'default': defaultParam,
    'function': functionParam,
    keyNum: keyNum1,
    label: label,
    parameter: parameter,
    'type': typeParam
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/functionKey/' + keyNum, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
