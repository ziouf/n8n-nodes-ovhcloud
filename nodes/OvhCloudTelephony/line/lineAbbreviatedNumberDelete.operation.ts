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
 * Executes the Delete Line Abbreviated Number Delete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const abbreviatedNumber = this.getNodeParameter('abbreviatedNumber', _itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/telephony/' + billingAccount + '/line/' + serviceName + '/abbreviatedNumber/' + abbreviatedNumber)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
