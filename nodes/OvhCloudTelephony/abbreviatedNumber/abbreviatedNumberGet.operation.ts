import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
	];
}

/**
 * Executes the Get Abbreviated Number Get operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const abbreviatedNumber = this.getNodeParameter('abbreviatedNumber', _itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + billingAccount + '/abbreviatedNumber/' + abbreviatedNumber)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
